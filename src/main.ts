import { createApp } from 'vue'
import App from './App.vue'
import store, { accessor } from './store'

const app = createApp(App)
app.use(store)

app.config.globalProperties.$accessor = accessor

app.mount('#app')
