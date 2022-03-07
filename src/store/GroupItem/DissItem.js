import axios from 'axios'

const DissItemOption = {
	namespaced: true,
	actions: {
		loadingAll(context) {
			axios.get('https://www.fastmock.site/mock/d29a3e30d1911c4d9a8f5c46b7832702/mymock/api/disslist').then(
				response => {
					context.commit('ADD_DISS', response.data)		
				},
				error => {
					alert(error.message)
				}
			)
		}
	},
	mutations: {
		ADD_DISS(state, value) {
			state.dissitem= value;
		}
	},
	state: {
		dissitem: []
	},
	getters: {}
}
export default DissItemOption 
