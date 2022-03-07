import axios from 'axios'

const GroupMainOption = {
	namespaced: true,
	actions: {
		loadingDiss(context) {
			axios.get('https://www.fastmock.site/mock/a6d72e032beace47874e9e1615572118/mymock/api/diss').then(
				response => {
					/* var res = response.data,
						len = res.length, */
					context.commit('ADD_DESS', response.data)
						
					/* context.commit('ADD_DESS', {
						title: response.data,
						groupname: response.data
						response.data
					}) */
				},
				error => {
					alert(error.message)
				}
			)
		}
	},
	mutations: {
		ADD_DESS(state, value) {
			state.diss= value;
			//state.diss.unshift(value);
		}
	},
	state: {
		diss: [{
			title: '泡面真好吃',
			groupname: '泡面，冲鸭'
		}]
	},
	getters: {}
}
export default GroupMainOption
