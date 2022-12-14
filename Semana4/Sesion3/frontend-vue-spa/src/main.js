import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootswatch from '../node_modules/bootswatch/dist/solar/bootstrap.css'

createApp(App, bootswatch).use(router).mount('#app')
