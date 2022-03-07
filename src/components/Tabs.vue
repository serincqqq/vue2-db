<template>
	<div class="homeMain">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane :label="'回复'+replyNum" name="first">
				<Reply></Reply>
			</el-tab-pane>
	
			<el-tab-pane :label="'赞'+upNum" name="second">
				<Up></Up>
			</el-tab-pane>
	
			<el-tab-pane :label="'转发'+transNum" name="third">
				<Trans></Trans>
			</el-tab-pane>
			<el-tab-pane :label="'收藏'+collectNum" name="fourth">
				<Collect></Collect>
			</el-tab-pane>	
		</el-tabs>	
	</div>
</template>

<script>
	import Reply from './Invitation/FuncReply.vue'
	import Collect from './Invitation/FuncCollect.vue'
	import Trans from './Invitation/FuncTrans.vue'
	import Up from './Invitation/FuncUp.vue'
	import bus from '../bus.js'
	export default{
		name:'Tabs',
		data() {
			return {
				activeName: 'first',
				replyNum: 20,
				transNum: 10,
				upNum: 4,
				collectNum: 10,
				//isOn: false
			};
		},
		// computed: {
		// 	activeName() {
				
		// 		return bus.activeName
				
		// 	}
		// },
		methods: {
			handleClick(tab, event) {
				console.log(tab.name);
				if(bus.activeName){
					console.log(bus.activeName);
					//this.activeName=bus.activeName
				}
			}
		},
		components:{
			Reply,
			Collect,
			Trans,
			Up
		}
	}
</script>

<style>
	.homeMain {
		padding-left: 20px;
		background-color: white;
	}
	
	.homeMain .el-tabs__nav-wrap::after {
		height: 1px;
	}
	
	.homeMain .el-tabs__item {
		padding-left: 20px;
		height: 50px;
		font-size: 16px;
		font-family: PingFang SC;
		font-weight: 400;
		color:#000000;
	}
	
	.homeMain .el-tabs__item:hover {
		color: black;
	}
	
	.homeMain .el-tabs__item.is-active {
		color: black;
	}
	
	.homeMain .el-tabs__active-bar {
		background: black;
		/* width: 30px; */
	}
	
	/* 去掉input激活时的边框 */
	.myHead .el-input--mini .el-input__inner {
		border: none;
	}
	
</style>
