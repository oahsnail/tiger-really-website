import './css/global.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Dashboard from '@/views/HomeView.vue'
import Configure from '@/views/TourView.vue'
import Graphs from '@/views/ContactView.vue'
import HOA from '@/views/PressKitView.vue'
import Schedules from './views/StoreView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Dashboard },
        { path: '/graphs', component: Graphs },
        { path: '/schedules', component: Schedules },
        { path: '/hoa', component: HOA },
        { path: '/configure', component: Configure },
    ],
})

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.mount('#app')
