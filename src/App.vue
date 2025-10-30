<template>
    <el-container>
        <el-header>
            <el-row>
                <el-col :span="4">
                    <el-icon
                        id="nav-toggle"
                        v-if="!isDesktop"
                        @click="openSidebar"
                        color="white"
                        size="30"
                        style="padding: 25px"
                    >
                        <Expand />
                    </el-icon>
                </el-col>
                <el-col :span="16">
                    <el-image v-if="!isDesktop" class="main-logo-mobile" :src="trLOGO" :fit="fit" />
                </el-col>
                <el-col :span="4"> </el-col>
            </el-row>
            <el-row v-if="isDesktop">
                <el-image class="main-logo-desktop" :src="trLOGO" :fit="fit" />
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
            <IconLinks />
        </el-footer>
        <small class="center tiny-text"> © 2025 Tiger Really. All rights reserved. </small>
        <small class="center tiny-text"> Built with love (and Vue.js) by Lian :D </small>
    </el-container>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import logo_url from '@/assets/img/tr_white.png'
import '@/css/footer.css'
import IconLinks from '@/components/IconLinks.vue'

export default {
    name: 'App',
    components: {
        NavigationBar,
        IconLinks,
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
