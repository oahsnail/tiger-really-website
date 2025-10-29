<template>
    <el-menu
        background-color="#276477"
        text-color="#ffffff"
        v-model:collapse="isCollapse"
        :default-active="activeIndex"
        :mode="orientation"
    >
        <router-link to="/">
            <el-menu-item @click="handleSelect">
                <template #title> Dashboard </template>
            </el-menu-item>
        </router-link>
        <router-link to="/graphs">
            <el-menu-item @click="handleSelect">
                <template #title> Graphs </template>
            </el-menu-item>
        </router-link>
        <router-link to="/schedules">
            <el-menu-item @click="handleSelect">
                <template #title> Schedules </template>
            </el-menu-item>
        </router-link>
        <router-link to="/hoa">
            <el-menu-item @click="handleSelect">
                <template #title> HOA </template>
            </el-menu-item>
        </router-link>
        <router-link to="/configure">
            <el-menu-item @click="handleSelect">
                <template #title> Configure </template>
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
