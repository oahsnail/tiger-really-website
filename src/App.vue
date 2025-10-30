<template>
    <main>
        <el-header>
            <el-row>
                <el-col :span="8">
                    <el-icon
                        id="nav-toggle"
                        v-if="!isDesktop"
                        @click="openSidebar"
                        color="white"
                        size="50"
                        style="padding: 15px"
                    >
                        <Expand />
                    </el-icon>
                </el-col>
                <el-col :span="8">
                    <el-image class="main-logo" :src="trLOGO" :fit="fit" />
                </el-col>
                <el-col :span="8"> </el-col>
            </el-row>
        </el-header>
        <el-main>
            <NavigationBar
                ref="navbar"
                style="z-index: 1"
                id="nav-bar"
                @close-sidebar="closeSidebar"
            />
            <div style="padding-top: 5vh"></div>
            <router-view />
        </el-main>
        <el-footer class="footer-icons">
            <a href="https://music.apple.com/" target="_blank" rel="noopener" title="Apple Music">
                <img src="@/assets/icons/applemusic.svg" class="footer-icon" alt="Apple Music" />
            </a>
            <a href="https://bandcamp.com/" target="_blank" rel="noopener" title="Bandcamp">
                <img src="@/assets/icons/bandcamp.svg" class="footer-icon" alt="Bandcamp" />
            </a>
            <a href="https://discord.com/" target="_blank" rel="noopener" title="Discord">
                <img src="@/assets/icons/discord.svg" class="footer-icon" alt="Discord" />
            </a>
            <a href="https://spotify.com/" target="_blank" rel="noopener" title="Spotify">
                <img src="@/assets/icons/spotify.svg" class="footer-icon" alt="Spotify" />
            </a>
            <a href="https://tiktok.com/" target="_blank" rel="noopener" title="TikTok">
                <img src="@/assets/icons/tiktok.svg" class="footer-icon" alt="TikTok" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener" title="YouTube">
                <img src="@/assets/icons/youtube.svg" class="footer-icon" alt="YouTube" />
            </a>
        </el-footer>
    </main>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import logo_url from '@/assets/img/tr_white.png'
import '@/css/footer.css'

export default {
    name: 'App',
    components: {
        NavigationBar,
    },
    data() {
        return {
            trLOGO: logo_url,
            fit: 'contain',
            isDesktop: window.innerWidth >= 900,
        }
    },
    methods: {
        checkIsDesktop() {
            this.isDesktop = window.innerWidth >= 900
        },
        openSidebar() {
            if (this.$refs.navbar) {
                if (this.$refs.navbar.isCollapse === false) {
                    this.$refs.navbar.isCollapse = true
                } else if (this.$refs.navbar.openSidebar) {
                    this.$refs.navbar.openSidebar()
                }
            }
        },
        closeSidebar() {
            if (this.$refs.navbar && this.$refs.navbar.isCollapse === false) {
                this.$refs.navbar.isCollapse = true
            }
        },
        handleDocumentClick(e) {
            if (!this.isDesktop) {
                const navBar = document.getElementById('nav-bar')
                const navToggle = document.getElementById('nav-toggle')
                if (
                    navBar &&
                    navToggle &&
                    !navBar.contains(e.target) &&
                    !navToggle.contains(e.target)
                ) {
                    this.closeSidebar()
                }
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.checkIsDesktop)
        document.addEventListener('click', this.handleDocumentClick)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkIsDesktop)
        document.removeEventListener('click', this.handleDocumentClick)
    },
}
</script>
