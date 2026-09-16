const PIXEL_ID = '913722761440703'
let initialized = false

function getPixel() {
    if (!window.fbq) {
        const fbq = function (...args) {
            if (fbq.callMethod) {
                fbq.callMethod(...args)
            } else {
                fbq.queue.push(args)
            }
        }
        window.fbq = fbq
        window._fbq = window._fbq || fbq
        fbq.push = fbq
        fbq.loaded = true
        fbq.version = '2.0'
        fbq.queue = []

        const script = document.createElement('script')
        script.async = true
        script.src = 'https://connect.facebook.net/en_US/fbevents.js'
        document.head.appendChild(script)
    }

    if (!initialized) {
        window.fbq('init', PIXEL_ID)
        initialized = true
    }

    return window.fbq
}

function track(command, event, parameters) {
    try {
        getPixel()(command, PIXEL_ID, event, parameters)
    } catch {
        // Tracking must never prevent a visitor from opening a music service.
    }
}

export function trackLandingPageView() {
    track('trackSingleCustom', 'TRPageView', {
        content_name: 'some kind of necromancer',
        page_path: '/some-kind-of-necromancer',
    })
}

export function trackPlatformClick(platform) {
    track('trackSingleCustom', 'TRPlatformClick', {
        content_name: 'some kind of necromancer',
        artist: 'Tiger Really',
        platform: platform.name,
        destination_url: platform.url,
    })
}
