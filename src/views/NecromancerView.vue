<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import coverArt from '@/assets/img/necromancer-landing.webp'
import spotifyLogo from '@/assets/music-services/spotify.png'
import appleLogo from '@/assets/music-services/apple.png'
import itunesLogo from '@/assets/music-services/itunes.png'
import tidalLogo from '@/assets/music-services/tidal.png'
import deezerLogo from '@/assets/music-services/deezer.png'
import amazonLogo from '@/assets/music-services/amazon.png'
import youtubeLogo from '@/assets/music-services/youtube.png'
import youtubeMusicLogo from '@/assets/music-services/youtubemusic.png'
import pandoraLogo from '@/assets/music-services/pandora.png'
import anghamiLogo from '@/assets/music-services/anghami.png'
import { trackLandingPageView, trackPlatformClick } from '@/metaPixel'

// Song destinations from https://ffm.to/mlneo3w, without Feature.fm redirect tracking.
const platforms = [
    {
        name: 'Spotify',
        logo: spotifyLogo,
        url: 'https://open.spotify.com/track/713LDNkag733I6sKVT49p4',
    },
    {
        name: 'Apple Music',
        logo: appleLogo,
        url: 'https://music.apple.com/album/some-kind-of-necromancer/1849945483?i=1849945646',
    },
    {
        name: 'iTunes',
        logo: itunesLogo,
        url: 'https://geo.itunes.apple.com/album/some-kind-of-necromancer/1849945483?i=1849945646&app=itunes',
        action: 'Download',
    },
    { name: 'TIDAL', logo: tidalLogo, url: 'https://www.tidal.com/track/470758892' },
    { name: 'Deezer', logo: deezerLogo, url: 'https://www.deezer.com/track/3631498432' },
    { name: 'Amazon Music', logo: amazonLogo, url: 'https://music.amazon.com/tracks/B0FYQRV8S5/' },
    { name: 'YouTube', logo: youtubeLogo, url: 'https://www.youtube.com/watch?v=E7in2o8UZMI' },
    {
        name: 'YouTube Music',
        logo: youtubeMusicLogo,
        url: 'https://music.youtube.com/watch?v=NfFrfTbO3XE',
    },
    {
        name: 'Pandora',
        logo: pandoraLogo,
        url: 'https://www.pandora.com/artist/tiger-really/blame/some-kind-of-necromancer/TR7qd7Zrcdmr63g',
    },
    { name: 'Anghami', logo: anghamiLogo, url: 'https://play.anghami.com/song/1237188088' },
]

const audio = ref(null)
const playing = ref(false)
const previewError = ref(false)

async function togglePreview() {
    if (playing.value) {
        audio.value.pause()
        return
    }
    try {
        await audio.value.play()
    } catch {
        previewError.value = true
    }
}

onMounted(() => {
    document.documentElement.classList.add('song-landing-active')
    trackLandingPageView()
})

onBeforeUnmount(() => {
    audio.value?.pause()
    document.documentElement.classList.remove('song-landing-active')
})
</script>

<template>
    <main class="song-landing" :style="{ '--song-artwork': `url(${coverArt})` }">
        <article class="song-card" aria-labelledby="song-title">
            <div class="song-artwork">
                <img
                    :src="coverArt"
                    alt="some kind of necromancer cover artwork"
                    width="640"
                    height="640"
                    fetchpriority="high"
                />
                <button
                    v-if="!previewError"
                    class="preview-button"
                    type="button"
                    :aria-label="playing ? 'Pause song preview' : 'Play song preview'"
                    :aria-pressed="playing"
                    @click="togglePreview"
                >
                    <svg v-if="playing" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24" aria-hidden="true">
                        <path d="m8 4 13 8-13 8z" />
                    </svg>
                </button>
                <audio
                    ref="audio"
                    preload="none"
                    src="https://p.scdn.co/mp3-preview/58eab6b655ee2995a99097a1af1cb84cda629b06?cid=de5de107fdd140ad9fe5802c2c2583c1"
                    @play="playing = true"
                    @pause="playing = false"
                    @ended="playing = false"
                    @error="previewError = true"
                />
            </div>
            <header class="song-heading">
                <h1 id="song-title">Tiger Really - some kind of necromancer</h1>
                <p>Choose your preferred music service</p>
                <p v-if="previewError" class="preview-error" role="status">
                    Preview unavailable. Listen on a service below.
                </p>
            </header>
            <ul class="platform-list" aria-label="Music services">
                <li v-for="platform in platforms" :key="platform.name">
                    <a
                        :href="platform.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="`${platform.action || 'Play'} on ${platform.name} (opens in a new tab)`"
                        @click="trackPlatformClick(platform)"
                        @auxclick.middle="trackPlatformClick(platform)"
                    >
                        <img :src="platform.logo" :alt="platform.name" class="platform-logo" />
                        <span class="platform-action">{{ platform.action || 'Play' }}</span>
                    </a>
                </li>
            </ul>
        </article>
        <footer class="song-footer">
            <router-link to="/">tigerreally.com</router-link>
        </footer>
    </main>
</template>

<style>
/* Override the main site's touch lock only while this standalone page is mounted. */
html.song-landing-active,
html.song-landing-active body {
    touch-action: auto !important;
    background: #252525;
}
</style>

<style scoped>
.song-landing {
    position: relative;
    isolation: isolate;
    min-height: 100vh;
    min-height: 100dvh;
    box-sizing: border-box;
    padding: 40px 16px 28px;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
}

.song-landing::before {
    content: '';
    position: fixed;
    z-index: -1;
    inset: 0;
    background:
        linear-gradient(#0009, #0006),
        var(--song-artwork) center / cover;
    filter: blur(30px);
    clip-path: inset(0);
    pointer-events: none;
}

.song-card {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 8px 40px #0005;
}

.song-artwork {
    position: relative;
    aspect-ratio: 1;
}

.song-artwork > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.preview-button {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    margin: auto;
    padding: 14px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #0008;
    color: #fff;
    cursor: pointer;
}

.preview-button:hover {
    background: #000c;
}

.preview-button svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
}

.song-heading {
    padding: 20px 15px;
    background: #2e2e2e;
    text-align: center;
}

.song-heading h1 {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.4;
    font-weight: 700;
    overflow-wrap: anywhere;
}

.song-heading p {
    margin: 8px 0 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #e0e0e0;
}

.platform-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.platform-list li + li {
    border-top: 1px solid #ededed;
}

.platform-list a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    min-height: 76px;
    box-sizing: border-box;
    padding: 18px 20px;
    color: #333;
    text-decoration: none;
    transition: background-color 150ms;
}

.platform-logo {
    display: block;
    width: auto;
    height: auto;
    max-width: 52%;
    max-height: 32px;
    object-fit: contain;
}

.platform-action {
    padding: 9px 12px;
    border: 1px solid #c4c4c4;
    border-radius: 6px;
    font-size: 0.875rem;
    line-height: 1.25;
    text-align: center;
    transition:
        background-color 150ms,
        color 150ms,
        border-color 150ms;
}

.platform-list a:hover {
    background: #f7f7f7;
}

.platform-list a:hover .platform-action,
.platform-list a:focus-visible .platform-action {
    background: #262626;
    border-color: #262626;
    color: #fff;
}

.platform-list a:focus-visible {
    outline: 3px solid #333;
    outline-offset: -4px;
}

.preview-button:focus-visible,
.song-footer a:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 4px;
}

.song-footer {
    padding-top: 24px;
    text-align: center;
    font-size: 0.875rem;
}

.song-footer a {
    color: #fff;
    text-underline-offset: 4px;
}

@media (max-width: 360px) {
    .song-landing {
        padding: 16px 12px 24px;
    }

    .platform-list a {
        padding-inline: 14px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .platform-list a,
    .platform-action {
        transition: none;
    }
}
</style>
