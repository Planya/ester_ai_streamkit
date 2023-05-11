import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/scss/main.scss'
import App from '@/App.vue'
import bus from '@/utils/bus-event'
import router from '@/router'

const app = createApp(App)
app.provide('bus', bus)
app.use(createPinia())
app.use(router)
app.mount('#app')
