import Vue from 'vue'

// bus
const bus = new Vue({
	data() {
		return {
			// 定义数据
			val1: '',
			activeName:'',
			transList:'',
			activeType:''
		}
	},
	created() {
		// 绑定监听
		this.$on('Trans', (data) => {
			this.transList = data
		}),
		this.$on('updateData1', (val) => {
			this.val1 = val
		}),
		this.$on('Type', (val) => {
			this.activeType = val
		}),
		this.$on('Active', (data) => {
			this.activeName = data
		})
	},
	
})
export default bus
