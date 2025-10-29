<template>
    <main>
        <el-header>
            <el-row>
                <el-col :span="8">
                    <el-icon id="nav-toggle" v-if="!isDesktop" @click="toggleNavbar" color="white" size="50"
                        style="padding: 15px">
                        <Expand />
                    </el-icon>
                </el-col>
                <el-col :span="8">
                    <el-image class="main-logo" :src="trLOGO" :fit="fit" />
                </el-col>
                <el-col :span="8">

                </el-col>
            </el-row>
        </el-header>
        <el-main>
            <NavigationBar :isCollapseProp="navbarCollapsed" @update-navbar-collapsed="toggleNavbar" style="z-index: 1"
                id="nav-bar" />

            <div style="padding-top: 5vh"></div>

            <router-view />
        </el-main>
    </main>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import logo_url from '@/assets/img/tr_white.png'
import { isDesktop as isDesktopUtil } from './util'

export default {
    name: 'App',
    data() {
        return {
            trLOGO: logo_url,
            fit: 'contain',
            navbarCollapsed: true,
        }
    },
    components: {
        NavigationBar,
    },
    computed: {
        isDesktop() {
            return isDesktopUtil()
        },
    },
    methods: {
        toggleNavbar() {
            if (!this.isDesktop) {
                this.navbarCollapsed = !this.navbarCollapsed
            }
        },
        closeNavbar() {
            if (!this.isDesktop && !this.navbarCollapsed) {
                this.navbarCollapsed = true
            }
        },
        onClick(e) {
            // Close the navbar if the user clicks outside of the navbar
            if (
                document.getElementById('nav-bar') != null &&
                document.getElementById('nav-toggle') != null &&
                !document.getElementById('nav-bar').contains(e.target) &&
                !document.getElementById('nav-toggle').contains(e.target)
            ) {
                this.navbarCollapsed = true
            }
        },
    },

    mounted() {
        document.addEventListener('click', this.onClick)
    },
}
</script>
