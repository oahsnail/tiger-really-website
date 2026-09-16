import '@/css/global.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'
import TourView from '@/views/TourView.vue'
import ContactView from '@/views/ContactView.vue'
import PressView from '@/views/PressView.vue'
import VideosView from '@/views/VideosView.vue'
import MusicView from '@/views/MusicView.vue'
import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

async function initializeAnalytics() {
    // Analytics is optional: missing configuration or browser support must not block rendering.
    if (
        import.meta.env.MODE !== 'production' ||
        !firebaseConfig.apiKey ||
        !firebaseConfig.appId ||
        !firebaseConfig.projectId
    ) {
        return null
    }
    try {
        if (!(await isSupported())) return null
        return getAnalytics(initializeApp(firebaseConfig))
    } catch (error) {
        console.warn('Firebase Analytics is unavailable.', error)
        return null
    }
}

const analyticsReady = initializeAnalytics()

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeView, meta: { title: 'Home' } },
        { path: '/music', component: MusicView, meta: { title: 'Music' } },
        {
            path: '/some-kind-of-necromancer',
            component: () => import('@/views/NecromancerView.vue'),
            meta: { title: 'some kind of necromancer', standalone: true },
        },
        { path: '/tour', component: TourView, meta: { title: 'Tour' } },
        { path: '/contact', component: ContactView, meta: { title: 'Contact' } },
        { path: '/press', component: PressView, meta: { title: 'Press Kit' } },
        { path: '/videos', component: VideosView, meta: { title: 'Videos' } },
    ],
})

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.mount('#app')

router.afterEach(async (to) => {
    const baseTitle = 'Tiger Really'
    if (to.meta && to.meta.title) {
        document.title = `${baseTitle} - ${to.meta.title}`
    } else {
        document.title = baseTitle
    }
    // Log page_view event
    try {
        const analytics = await analyticsReady
        if (analytics) {
            logEvent(analytics, 'page_view', { page_path: to.fullPath })
        }
    } catch (e) {
        // Analytics might not be available in development
        console.error(e)
    }
})
