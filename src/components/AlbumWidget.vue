<template>
    <div class="center">
        <a :href="bandcampUrl" target="_blank" rel="noopener noreferrer">
            <img :src="coverArtUrl" alt="Album Cover Art" class="album-cover" />
        </a>
    </div>
</template>
<script>
import '../css/album-widget.css';
export default {
    name: 'AlbumWidget',
    props: {
        coverArt: {
            type: String,
            required: true,
        },
        bandcampUrl: {
            type: String,
            required: true,
        },
    },
    computed: {
        coverArtUrl() {
            // Try to resolve using Vite's asset handling
            try {
                return new URL(`../assets/img/${this.coverArt}`, import.meta.url).href;
            } catch {
                // fallback: try public folder
                return `/assets/img/${this.coverArt}`;
            }
        }
    },
}
</script>
