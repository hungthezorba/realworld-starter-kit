import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './config/routes'
const app = createApp(App).use(router)
app.mount("#app")
