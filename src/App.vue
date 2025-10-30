<template>
    <main>
        <el-header>
            <el-row>
                <el-col :span="8">
                    <el-icon id="nav-toggle" v-if="!isDesktop" @click="openSidebar" color="white" size="50"
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
            <NavigationBar ref="navbar" style="z-index: 1" id="nav-bar" @close-sidebar="closeSidebar" />
            <div style="padding-top: 5vh"></div>
            <router-view />
        </el-main>
    </main>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import logo_url from '@/assets/img/tr_white.png';
import { isDesktop as isDesktopUtil } from './util';

export default {
    name: 'App',
    data() {
        return {
            trLOGO: logo_url,
            fit: 'contain',
            isDesktop: isDesktopUtil(),
        }
    },
    components: {
        NavigationBar,
    },
    methods: {
        openSidebar() {
            if (this.$refs.navbar) {
                if (this.$refs.navbar.isCollapse === false) {
                    // Sidebar is open, close it
                    this.$refs.navbar.isCollapse = true;
                } else if (this.$refs.navbar.openSidebar) {
                    // Sidebar is closed, open it
                    this.$refs.navbar.openSidebar();
                }
            }
        },
        closeSidebar() {
            if (this.$refs.navbar && this.$refs.navbar.isCollapse === false) {
                this.$refs.navbar.isCollapse = true;
            }
        },
        handleResize() {
            this.isDesktop = isDesktopUtil();
        },
        handleDocumentClick(e) {
            if (!this.isDesktop) {
                const navBar = document.getElementById('nav-bar');
                const navToggle = document.getElementById('nav-toggle');
                if (
                    navBar && navToggle &&
                    !navBar.contains(e.target) &&
                    !navToggle.contains(e.target)
                ) {
                    this.closeSidebar();
                }
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        document.addEventListener('click', this.handleDocumentClick);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('click', this.handleDocumentClick);
    },
}
</script>
