<template>

    <el-image :src="trLOGO" fit="contain" class="press-logo" />
    <div class="center">
        <a href="https://drive.google.com/drive/u/1/folders/1C7HcmXOidsCPmW2ODD6ohYAik88NOAV4" target="_blank"
            rel="noopener">
            <button class="press-download-btn heavy-font">
                Download Press Photos
            </button>
        </a>

    </div>


    <section class="press-bio-section">
        <h2 class="center heavy-font">Official Bio</h2>
        <p class="press-bio-text">
            Starting out as a stupid pun on the name of a flower, Tiger Really has since transformed from a bedroom
            project to one of the most exciting and unique bands the Vancouver scene has to offer. Fronted by
            songwriter/multi-instrumentalist Lian Shao, the band has carved out a niche for themselves by mixing emo
            with elements of jazz, punk, and indie rock, creating a sound that is both distinct and deeply
            resonant.<br><br>
            Since signing with legendary emo label Counter Intuitive Records in 2023, Tiger Really has built a dedicated
            global audience through social media and word of mouth, alongside performing frequent local shows and
            sharing stages with some of the genre's most influential touring acts including 'Michael Cera Palin',
            'Chinese Football', 'Weatherday' and 'Your Arms Are My Cocoon'. Their consistently electrifying performances
            coupled with Lian's intensely personal songwriting has garnered them a deeply connected fan base and
            community, cementing themselves as a staple of the Vancouver underground.<br><br>
            Tiger Really is set to release their highly anticipated debut full length album "Swan Sting" on October 18th
            2024 through Counter Intuitive records.
        </p>
    </section>
    <section class="press-quotes-section">
        <h2 class="center heavy-font">Press Releases</h2>
        <ul class="press-quotes-list">
            <li>
                <q>Bubbles with pain until it spills out</q> –
                <a href="https://www.straight.com/music/tiger-reallys-swan-sting-melds-big-feelings-with-jazzy-ingenuity#"
                    target="_blank" rel="noopener">The Georgia Straight</a>
            </li>
            <li>
                <q>An unpretentious breath of fresh air.</q> –
                <a href="https://www.kerrang.com/the-sound-of-2024-the-new-artists-redefining-alternative-music"
                    target="_blank" rel="noopener">Kerrang</a>
            </li>
            <li>
                <q>An intimate look into coping with loss and personal struggles</q> –
                <a href="https://idioteq.com/rock-shorts-end-of-february/" target="_blank" rel="noopener">IDIOTEQ</a>
            </li>
            <li>
                <q>A cathartic emotional release</q> –
                <a href="https://newnoisemagazine.com/premieres/track-premiere-tiger-really-dry-heave/" target="_blank"
                    rel="noopener">New Noise Magazine</a>
            </li>
            <li>
                <q>Tiger Really calls on chaos and catharsis</q> –
                <a href="https://ubyssey.ca/features/bands-shaping-vancouver-music-scene/" target="_blank"
                    rel="noopener">The Ubyssey</a>
            </li>
            <li>
                <q>Immediately catchy... searing and spiraling</q> –
                <a href="https://www.undertheradarmag.com/news/tiger_really_shares_new_single_fundamentally_unloveable"
                    target="_blank" rel="noopener">Under the Radar Magazine</a>
            </li>
            <li>
                <q>Teetering between melancholic softness and pensive screaming</q> –
                <a href="https://www.stilllisteningmagazine.com/features/local-summer-series-vancouver-review?rq=tiger%20really"
                    target="_blank" rel="noopener">Still Listening Magazine</a>
            </li>
        </ul>
        <h2 class="center heavy-font">Interviews</h2>
        <ul class="press-interviews-list">
            <li>
                <a href="https://bonyknees.com/article/tiger-really-vancouver-swan-sting" target="_blank"
                    rel="noopener">Bony Knees</a>
            </li>
            <li>
                <a href="https://www.stilllisteningmagazine.com/start-listening-to/start-listening-to-tiger-really"
                    target="_blank" rel="noopener">Still Listening Magazine</a>
            </li>
        </ul>
    </section>



</template>

<script>
import '@/css/press.css'
import logo_url from '@/assets/img/some_kind_of_necromancer.jpg'
export default {
    name: 'PressView',

    data() {
        return {
            trLOGO: logo_url,
        }
    },
}
</script>
