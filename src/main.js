import './css/global.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomeView from '@/views/HomeView.vue'
import TourView from '@/views/TourView.vue'
import ContactView from '@/views/ContactView.vue'
import PressKitView from '@/views/PressKitView.vue'
import StoreView from './views/StoreView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/tour', component: TourView },
        { path: '/contact', component: ContactView },
        { path: '/press-kit', component: PressKitView },
        { path: '/store', component: StoreView },
    ],
})

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.mount('#app')
