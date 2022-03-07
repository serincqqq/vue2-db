<template>
	<div style="margin-top:10px;">
		<Tabs></Tabs>
		<!-- <div class="homeMain">
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
			
		</div> -->
		<div class="end">the---end</div>
	</div>
</template>

<script>
	
	import Tabs from '../components/Tabs.vue'
	
	
	export default {
		name: 'DissFunc',
		components:{
			Tabs
		},
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	body {
		background-color: #ecf0f1;
	}

	.on {
		color: #2ecc71;
	}

	.end {
		text-align: center;
		padding-bottom: 10px;
		width: 100%;
		height: 100px;
		color: gainsboro;
		font-size: 25px;
	}
	
</style>
