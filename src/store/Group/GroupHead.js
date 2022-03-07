import axios from 'axios'

const GroupHeadOption= {
	namespaced: true,
	actions: {
		loadingGroup(context) {
			axios.get('https://www.fastmock.site/mock/2fd095032367a7b8ba5639fdcdfb4d76/mysock_groups/api/groups').then(
				response => {
					context.commit('ADD_GROUP', response.data)		
				},
				error => {
					alert(error.message)
				}
			)
		}
	},
	mutations: {
		ADD_GROUP(state, value) {
			state.groups= value;
			//state.diss.unshift(value);
		}
	},
	state: {
		/* groups: [{
			imgUrl: '泡面真好吃',
			groupname: '泡面，冲鸭'
		}] */
		groups: []
	},
	getters: {}
}
export default GroupHeadOption 
