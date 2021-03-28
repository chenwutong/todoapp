import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
//Vue.use(contentmenu)
// const app = Vue.createApp({})
// app.component("contentmenu",contentmenu)

// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// const app = createApp();
// app.config.productionTip = false;
//app.use(Antd);
//element ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
