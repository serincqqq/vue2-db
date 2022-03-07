//该文件用于创作vuex中最为核心的store
//引入vuex
import Vuex from 'vuex'
//引入vue
import Vue from 'vue'
//应用vuex插件
Vue.use(Vuex)

import GroupHeadOption from './Group/GroupHead.js'
import GroupMainOption from './Group/GroupMain.js'
import DissItemOption from './GroupItem/DissItem.js'

//创建store
const store=new Vuex.Store({
	modules:{
		GroupHeadAbout:GroupHeadOption,
		GroupMainAbout:GroupMainOption,
		DissItemAbout:DissItemOption
	}
})
//暴露store
export default store