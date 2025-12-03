<template>

    <h2 class="center heavy-font">Live Sets</h2>
    <div class="center videos-container">
        <el-row justify=" center" class="video-row">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="center heavy-font">
                <iframe class="video-iframe" src="https://www.youtube.com/embed/cgkc4xcaDLk"
                    title="Tiger Really - Full Set HD - Live at Wise Hall" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <iframe class="video-iframe" src="https://www.youtube.com/embed/n4Czf53NQD8"
                    title="Tiger Really - Live in Matty&#39;s Garage (URLFest 2025)" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </el-col>
        </el-row>
    </div>

    <h2 class="center heavy-font">Music Videos</h2>
    <div class="center videos-container">
        <el-row justify=" center" class="video-row">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="center heavy-font">
                <iframe class="video-iframe" src="https://www.youtube.com/embed/E7in2o8UZMI"
                    title="tiger really - some kind of necromancer (Official Music Video)" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </el-col>
        </el-row>
        <el-row justify=" center" class="video-row">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="center heavy-font">
                <iframe class="video-iframe" src="https://www.youtube.com/embed/DReXigxqGXM"
                    title="tiger really - Rites of Spring [OFFICIAL MUSIC VIDEO]" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <iframe class="video-iframe" src="https://www.youtube.com/embed/vyapyICuYsU"
                    title="tiger really - um, excuse me, i think there&#39;s tears in my slurpee [OFFICIAL MUSIC VIDEO]"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </el-col>
        </el-row>
    </div>

    <h2 class="center heavy-font">Documentary</h2>
    <div class="center videos-container">
        <el-row justify=" center" class="video-row">
            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="center heavy-font">
                <iframe class="video-iframe" src="https://www.youtube.com/embed/uXix13me3bg"
                    title="tiger really? - a documentary on canada&#39;s worst asian emo band" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </el-col>
        </el-row>
    </div>

</template>

<script>
import '../css/videos.css'
export default {
    name: 'VideosView',
}
</script>
