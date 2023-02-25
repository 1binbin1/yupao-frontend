import {createApp} from 'vue'
import App from './App.vue'

// 要引入的组件
import {Button, NavBar, Icon,Tabbar, TabbarItem } from 'vant';


const app = createApp(App);
// 注册使用
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);

app.mount('#app')
