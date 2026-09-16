<template>
    <br />
    <AlbumWidget coverArt="mayfly_daydream.webp" bandcampUrl="https://orcd.co/trmd" />
    <br />
    <AlbumWidget coverArt="swan_sting.webp"
        bandcampUrl="https://counterintuitiverecords.bandcamp.com/album/swan-sting" />
    <br />
    <AlbumWidget coverArt="slippers.webp" bandcampUrl="https://tigerreally.bandcamp.com/track/slippers" />
    <br />
    <AlbumWidget coverArt="rites_of_spring.webp" bandcampUrl="https://tigerreally.bandcamp.com/album/rites-of-spring" />
</template>

<script>
import AlbumWidget from '@/components/AlbumWidget.vue';

export default {
    name: 'MusicView',
    components: {
        AlbumWidget
    }
}
</script>
