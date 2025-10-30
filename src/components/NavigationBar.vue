<template>
    <el-menu text-color="#ffffff" v-model:collapse="isCollapse" :default-active="activeIndex" :mode="orientation"
        class="navigation-bar">
        <router-link to="/">
            <el-menu-item @click="handleSelect">
                <template #title> Home </template>
            </el-menu-item>
        </router-link>
        <router-link to="/tour">
            <el-menu-item @click="handleSelect">
                <template #title> Tour </template>
            </el-menu-item>
        </router-link>
        <router-link to="/contact">
            <el-menu-item @click="handleSelect">
                <template #title> Contact </template>
            </el-menu-item>
        </router-link>
        <router-link to="/press-kit">
            <el-menu-item @click="handleSelect">
                <template #title> Press Kit </template>
            </el-menu-item>
        </router-link>
        <router-link to="/store">
            <el-menu-item @click="handleSelect">
                <template #title> Store </template>
            </el-menu-item>
        </router-link>
    </el-menu>
</template>


<script>
import '../css/navigation-bar.css'

function isDesktop() {
    // You can adjust the breakpoint as needed
    return window.innerWidth >= 900;
}

export default {
    name: 'NavigationBar',
    data() {
        return {
            isCollapse: !isDesktop(),
            orientation: isDesktop() ? 'horizontal' : 'vertical',
            activeIndex: this.$route.fullPath,
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    watch: {
        $route(to) {
            this.activeIndex = to.fullPath;
        },
    },
    methods: {
        handleResize() {
            const desktop = isDesktop();
            this.orientation = desktop ? 'horizontal' : 'vertical';
            this.isCollapse = !desktop;
        },
        handleSelect() {
            if (!isDesktop()) {
                this.isCollapse = true;
                this.$emit('close-sidebar');
            }
        },
        openSidebar() {
            if (!isDesktop()) {
                this.isCollapse = false;
            }
        },
    },
}
</script>
