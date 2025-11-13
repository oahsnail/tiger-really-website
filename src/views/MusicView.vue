<template>
    <br />
    <AlbumWidget coverArt="mayfly_daydream.jpg" bandcampUrl="https://orcd.co/trmd" />
    <br />
    <AlbumWidget coverArt="swan_sting.jpg"
        bandcampUrl="https://counterintuitiverecords.bandcamp.com/album/swan-sting" />
    <br />
    <AlbumWidget coverArt="slippers.jpg" bandcampUrl="https://tigerreally.bandcamp.com/track/slippers" />
    <br />
    <AlbumWidget coverArt="rites_of_spring.jpg" bandcampUrl="https://tigerreally.bandcamp.com/album/rites-of-spring" />
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
