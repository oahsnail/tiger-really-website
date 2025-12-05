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
            Tiger Really’s <em>"mayfly daydream"</em> is
            a gazey, folk influenced take on the emo genre that explores themes of loneliness, yearning, and escapism.
            Written during a period of extensive long-term social isolation and loss, mayfly daydream is the
            genre-splicing horror-tinged sophomore album from Vancouver based emo project Tiger Really. Taking thematic
            inspiration from various cryptids and supernatural myths of American folklore and horror stories, the album
            tells a story of avoidance, loneliness, escapism, and ultimately acceptance for the way things are.
            Manifesting through fuzzy yet delicate guitar lines, confessional lyrics, and vivid imagery, the result is a
            body of work that feels both deeply personal and universally resonant.

            <br><br>
            The album features guest performances from Samuel Uribe Botero of Racing Mount Pleasant, Carson Bassett from
            daysormay, idialedyournumber, and Jia, expanding Tiger Really’s sonic palette while remaining anchored in
            their trademark vulnerability and introspection.
            FFO: ‘Origami Angel’, ‘Glocca Morra’, ‘julie’, ‘MJ Lenderman’, ‘Black Country, New Road’
            <br><br>
            Since signing with legendary emo label Counter Intuitive Records in 2023, Tiger Really has built a dedicated
            global audience through social media and word of mouth, alongside performing frequent local shows and
            sharing stages with some of the genre's most influential touring acts including 'Michael Cera Palin',
            'Chinese Football', 'Weatherday', 'Anamanaguchi', and 'Your Arms Are My Cocoon'. Their consistently
            electrifying performances
            coupled with Lian's intensely personal songwriting has garnered them a deeply connected fan base and
            community, cementing themselves as a staple of the Vancouver underground.<br><br>
            <em>"mayfly daydream"</em> is set to release on
            February 27th, 2026 through Counter Intuitive records.
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
                <q>An unpretentious breath of fresh air</q> –
                <a href="https://www.kerrang.com/the-sound-of-2024-the-new-artists-redefining-alternative-music"
                    target="_blank" rel="noopener">Kerrang</a>
            </li>
            <li>
                <q>Trauma dumping has never been so welcome or sounded so good</q> –
                <a href="https://moosicentertainment.com/2025/12/05/like-mixing-champagne-and-ativan-emo-jazz-pioneers-tiger-really-release-new-single/"
                    target="_blank" rel="noopener">Moosic Entertainment</a>
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
