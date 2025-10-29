<template>
    <el-menu text-color="#ffffff" v-model:collapse="isCollapse" :default-active="activeIndex" :mode="orientation">
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
        <router-link to="/music">
            <el-menu-item @click="handleSelect">
                <template #title> Music </template>
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
import { isDesktop } from '@/util'

export default {
    name: 'NavigationBar',
    props: {
        isCollapseProp: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            // This controls the actual value that binds to the el-menu component
            // essentially mirroring isCollapseProp
            isCollapse: isDesktop() ? false : this.isCollapseProp,

            // controlls which of the routes on el-menu is highlighted by default
            activeIndex: this.$route.fullPath,
            orientation: isDesktop() ? 'horizontal' : 'vertical',
        }
    },
    watch: {
        isCollapseProp(new_val) {
            this.isCollapse = new_val
        },
        $route(to) {
            this.activeIndex = to.fullPath
        },
    },
    methods: {
        handleSelect() {
            if (!isDesktop()) {
                this.isCollapse = true
                this.$emit('update-navbar-collapsed', true)
            }
        },
    },
}
</script>
