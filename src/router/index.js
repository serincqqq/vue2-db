//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//一级路由
import Personal from '../pages/Personal.vue'
import Home from '../pages/Home.vue'
import Audiobook from '../pages/Audiobook.vue'
import Group from '../pages/Group.vue'
import Login from '../pages/Login.vue'
import Diss from '../pages/Diss.vue'
import GroupItem from '../pages/GroupItem.vue'
import Search from '../pages/Search.vue'
import DyDetail from '../pages/HomeList/DyDetail.vue'
import Msg from '../pages/Msg.vue'
import Editor from '../pages/Editor.vue'
//二级路由
import AMA from '../pages/GroupList/AMA.vue'
import All from '../pages/GroupList/All.vue'
import Activity from '../pages/GroupList/Activity.vue'
import Trans from '../pages/HomeList/Trans.vue'
import RcTrans from '../pages/HomeList/RcTrans.vue'
import Private from '../pages/MsgList/Private.vue'
import Remind from '../pages/MsgList/Remind.vue'
import homePage from '../pages/PersonalList/homePage.vue'
import Photo from '../pages/PersonalList/Photo.vue'
import Audio from '../pages/PersonalList/Audio.vue'

import Recommend from '../pages/HomeList/Recommend.vue'
import Dynamic from '../pages/HomeList/Dynamic.vue'

import Film from '../pages/AudiobookList/Film.vue'
import TV from '../pages/AudiobookList/TV.vue'
import Read from '../pages/AudiobookList/Read.vue'

//三级路由


const router = new VueRouter({
	routes: [{
			//一级路由
			path: '/personal',
			component: Personal,
			children:[
				{
					path:'homepage/:position',
					component:homePage
				},
				/* 这样写有点问题 */
				/* {
					path:'',
					redirect:'homepage/0'
				} */
				{
					path:'audio',
					component:Audio
				},
				{
					path:'photo',
					component:Photo
				}
			],
			meta: {
				needLogin: true
			},
			beforeEnter: (to, from, next) => {
				console.log(to, from)
				if (to.meta.needLogin) {
					//判断是否需要鉴权
					console.log('鉴权')
					if (sessionStorage.getItem('s') === 'true') {
						console.log('有权限')
						next()
					} else {
						//alert('没有权限查看')
						next({path:'/login'})
					}
				} else {
					next()				
				}
			}
		},
		{
			path:'/msg',
			component:Msg,
			children:[
				{
					path:'remind',
					component:Remind
				},
				{
					path:'private',
					component:Private
				},
				{
					path:'',
					redirect:'remind'
				}
			],
			meta: {
				needLogin: true
			},
			beforeEnter: (to, from, next) => {
				console.log(to, from)
				if (to.meta.needLogin) {
					//判断是否需要鉴权
					console.log('鉴权')
					if (sessionStorage.getItem('s') === 'true') {
						console.log('有权限')
						next()
					} else {
						//alert('没有权限查看')
						next({path:'/login'})
					}
				} else {
					next()				
				}
			}
		},
		{
			//一级路由
			path: '/login',
			component: Login,
		},
		{
			path: '/home',
			component: Home,
			children:[
				{
					path: 'recommend',
					component: Recommend,
				},
				{
					path: 'dynamic',
					component: Dynamic,
				},
				{
					path:'',
					redirect:'dynamic'
				}
			]
		},
		{
			path:'/editor',
			component:Editor
		},
		{
			path: '/rctrans',
			component:RcTrans
		},
		{
			path: '/dydetail',
			component: DyDetail,
		},
		{
			path: '/trans',
			component: Trans,
		},
		{
			path: '/audiobook',
			component: Audiobook,
			children:[
				{
					path: 'film',
					component: Film
				},
				{
					path: 'tv',
					component:TV
				},
				{
					path: 'read',
					component:Read
				},
				{
					path:'',
					redirect:'film'
				}
			]
		},
		{
			path: '/group',
			component: Group,
		},
		{
			path: '/diss',
			component: Diss,
		},
		{
			path:'/search',
			component:Search
		},
		{
			path: '/groupitem',
			component: GroupItem,
			children:[
				{
					path: 'all',
					component: All,
				},
				{
					path: 'ama',
					component: AMA,
				},
				{
					path: 'activity',
					component: Activity,
				},
				{
					path:'',
					redirect:'all'
				}
			]
		},
		{
			path:'',
			redirect:'/group'
		}
	]
})

export default router
