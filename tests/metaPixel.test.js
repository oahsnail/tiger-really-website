import assert from 'node:assert/strict'
import { afterEach, test } from 'node:test'

const originalWindow = globalThis.window
const originalDocument = globalThis.document
let moduleId = 0

async function setup(fbq) {
    const scripts = []
    globalThis.window = fbq ? { fbq } : {}
    globalThis.document = {
        createElement: (tag) => ({ tag }),
        head: { appendChild: (script) => scripts.push(script) },
    }
    const pixel = await import(`../src/metaPixel.js?test=${moduleId++}`)
    return { pixel, scripts }
}

afterEach(() => {
    if (originalWindow === undefined) delete globalThis.window
    else globalThis.window = originalWindow
    if (originalDocument === undefined) delete globalThis.document
    else globalThis.document = originalDocument
})

test('queues visits and platform clicks until the Meta script loads, initializing only once', async () => {
    const { pixel, scripts } = await setup()
    pixel.trackLandingPageView()
    pixel.trackPlatformClick({ name: 'Spotify', url: 'https://open.spotify.com/track/song' })
    pixel.trackLandingPageView()

    assert.equal(scripts.length, 1)
    assert.equal(scripts[0].src, 'https://connect.facebook.net/en_US/fbevents.js')
    assert.equal(scripts[0].async, true)
    assert.equal(window.fbq, window._fbq)
    assert.deepEqual(
        window.fbq.queue.map((event) => event.slice(0, 3)),
        [
            ['init', '913722761440703'],
            ['trackSingleCustom', '913722761440703', 'TRPageView'],
            ['trackSingleCustom', '913722761440703', 'TRPlatformClick'],
            ['trackSingleCustom', '913722761440703', 'TRPageView'],
        ],
    )
    assert.deepEqual(window.fbq.queue[2][3], {
        content_name: 'some kind of necromancer',
        artist: 'Tiger Really',
        platform: 'Spotify',
        destination_url: 'https://open.spotify.com/track/song',
    })
})

test('sends subsequent clicks directly after the Meta script is ready', async () => {
    const { pixel } = await setup()
    pixel.trackLandingPageView()
    const calls = []
    window.fbq.callMethod = (...args) => calls.push(args)
    pixel.trackPlatformClick({ name: 'Apple Music', url: 'https://music.apple.com/album/song' })
    assert.equal(calls.length, 1)
    assert.deepEqual(calls[0].slice(0, 3), [
        'trackSingleCustom',
        '913722761440703',
        'TRPlatformClick',
    ])
    assert.equal(calls[0][3].platform, 'Apple Music')
})

test('reuses an existing Meta script and targets only the requested pixel', async () => {
    const calls = []
    const existingPixel = (...args) => calls.push(args)
    const { pixel, scripts } = await setup(existingPixel)
    pixel.trackLandingPageView()
    pixel.trackPlatformClick({ name: 'YouTube', url: 'https://www.youtube.com/watch?v=song' })
    assert.equal(window.fbq, existingPixel)
    assert.equal(scripts.length, 0)
    assert.deepEqual(
        calls.map((event) => event.slice(0, 3)),
        [
            ['init', '913722761440703'],
            ['trackSingleCustom', '913722761440703', 'TRPageView'],
            ['trackSingleCustom', '913722761440703', 'TRPlatformClick'],
        ],
    )
})

test('tracking failures do not interrupt the page or outbound link handler', async () => {
    const { pixel } = await setup(() => {
        throw new Error('Tracking blocked')
    })
    assert.doesNotThrow(() => pixel.trackLandingPageView())
    assert.doesNotThrow(() => pixel.trackPlatformClick({ name: 'TIDAL', url: 'https://tidal.com' }))
})
