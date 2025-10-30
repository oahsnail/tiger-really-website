<template>
    <el-menu
        text-color="#ffffff"
        v-model:collapse="isCollapse"
        :default-active="activeIndex"
        :mode="orientation"
        class="navigation-bar"
    >
        <router-link to="/tour">
            <el-menu-item @click="handleSelect">
                <template #title> Tour </template>
            </el-menu-item>
        </router-link>
        <router-link to="/press">
            <el-menu-item @click="handleSelect">
                <template #title> Press Kit </template>
            </el-menu-item>
        </router-link>
        <router-link to="/store">
            <el-menu-item @click="handleSelect">
                <template #title> Store </template>
            </el-menu-item>
        </router-link>
        <router-link to="/videos">
            <el-menu-item @click="handleSelect">
                <template #title> Videos </template>
            </el-menu-item>
        </router-link>
        <router-link to="/contact">
            <el-menu-item @click="handleSelect">
                <template #title> Contact </template>
            </el-menu-item>
        </router-link>
    </el-menu>
</template>

<script>
import '../css/navigation-bar.css'

export default {
    name: 'NavigationBar',
    data() {
        return {
            isCollapse: window.innerWidth < 900,
            orientation: window.innerWidth >= 900 ? 'horizontal' : 'vertical',
            activeIndex: this.$route.fullPath,
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize)
    },
    watch: {
        $route(to) {
            this.activeIndex = to.fullPath
        },
    },
    methods: {
        isDesktop() {
            return window.innerWidth >= 900
        },
        handleResize() {
            const desktop = this.isDesktop()
            this.orientation = desktop ? 'horizontal' : 'vertical'
            this.isCollapse = !desktop
        },
        handleSelect() {
            if (!this.isDesktop()) {
                this.isCollapse = true
                this.$emit('close-sidebar')
            }
        },
        openSidebar() {
            if (!this.isDesktop()) {
                this.isCollapse = false
            }
        },
    },
}
</script>
