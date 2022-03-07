<template>
	<div style="background-color: white">
			<div class="func">
				<i @click="back" class="el-icon-arrow-left"></i>
				<i class="el-icon-more"></i>
			</div>
	
			<div class="head">
				<img :src="val1[0].tx" />
				<div style="margin-right:240px;">
					<span>{{val1[0].user}}</span>
					<br />
					<small>说</small>
				</div>
				<small style="float: right;">{{val1[0].time}}</small>
			</div>
	
			<div class="main">
				<p>{{val1[0].content}}</p>
			</div>
			<div class="dis">
				<!-- 超出三行不显示 -->
				<small>{{val1[0].others1}}</small>
				<small>{{val1[0].others2}}</small>
			</div>
	
			<div style="margin: 10px;">
				<Tabs></Tabs>
			</div>
			<div class="end">the---end</div>
		</div>
</template>

<script>
	import Tabs from '../../components/Tabs.vue'
	import bus from '../../bus.js'

	export default {
		name: 'DyDetail',
		components: {
			Tabs
		},
		computed: {
			val1() {
				// 依赖并返回bus中的val1
				return bus.val1
			}
		},
		
		methods: {
			back() {
				this.$router.go(-1); // 返回上一个路由
			},
		},
		
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	body {
		background-color: #f5f6fa;
	}

	.end {
		text-align: center;
		padding-bottom: 10px;
		width: 100%;
		height: 100px;
		color: gainsboro;
		font-size: 25px;
	}

	.head {
		display: flex;
		padding: 10px;
	}

	.head img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		padding-right: 10px;
	}

	.head small {
		color: #808080;
	}

	.func {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		font-size: 23px;
	}
	.func h3{
		text-align: center;
	}
	.main {
		padding: 0 10px 0 10px;
	}

	.dis {
		margin: 10px;
		border-left: 1px solid #BBBBBB;
		display: flex;
		flex-direction: column;
	}

	.dis small {
		color: #818181;
	}

	.main img {
		height: 70px;
		width: 70px;
	}
</style>
