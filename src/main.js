import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index.js'
//引入element Ui
<<<<<<< HEAD
import {Icon,Carousel,CarouselItem,Tabs,TabPane,Rate} from 'element-ui';
=======
import {
	Icon,
	Carousel,
	CarouselItem,
	Tabs,
	TabPane,
	Rate,
	Dropdown,
	DropdownMenu,
	DropdownItem,
} from 'element-ui';
>>>>>>> 6901f85 (first)
//引入store
import store from './store/index.js'
//引入iview
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
//引入bus
import bus from './bus.js'
<<<<<<< HEAD
=======
//引入视频播放组件
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer)
>>>>>>> 6901f85 (first)

Vue.use(VueRouter)
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.component(Icon.name, Icon);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
<<<<<<< HEAD

Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);

Vue.component(Rate.name, Rate);

new Vue({
	el:'#app',
	render: h => h(App),
	router:router,
	store:store,
=======
Vue.component(Dropdown.name, Dropdown);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(Rate.name, Rate);
Vue.component(DropdownItem.name, DropdownItem);
new Vue({
	el: '#app',
	render: h => h(App),
	router: router,
	store: store,
>>>>>>> 6901f85 (first)
})
