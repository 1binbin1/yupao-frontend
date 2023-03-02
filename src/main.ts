import {createApp} from 'vue'
import App from './App.vue'

// 要引入的组件
import {Button, NavBar, Icon, Tabbar, TabbarItem} from 'vant';
import * as VueRouter from 'vue-router';
import routes from "./config/route";


const app = createApp(App);
// 注册使用
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);


const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
app.use(router);

app.mount('#app')




