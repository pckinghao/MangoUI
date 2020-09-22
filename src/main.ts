import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import panhao from './components/panhao.vue'
import panhao2 from './components/panhao2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component: panhao},
        {path:'/xxx',component: panhao2}
    ]
})
const app =createApp(App)
app.use(router)
app.mount('#app')
