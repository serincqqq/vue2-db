<template>
	<div v-show="!(path==='/diss')">
		<div class="bottom-tab">
			<span class="tab-item" :class="{on: '/home/dynamic'===$route.path}" @click="goTo('/home')">
				<i style="font-size:25px" class="el-icon-s-home"></i>
				<span>首页</span>
			</span>
			
			<span class="tab-item" :class="{on: '/audiobook/film'===$route.path}" @click="goTo('/audiobook')">
				<i style="font-size:25px" class="el-icon-collection"></i>
				<span>书影音</span>
			</span>
			
			<span class="tab-item" :class="{on: '/group'===$route.path}" @click="goTo('/group')">
				<i style="font-size:25px" class="el-icon-orange"></i>
				<span>小组</span>
			</span>
			
			<span class="tab-item" :class="{on: '/personal'===$route.path}" @click="goTo('/personal')">
				<i style="font-size:25px" class="el-icon-user"></i>
				<span>个人中心</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FooterGuide',
		data(){
			return{
				path:''
			}
		},
		mounted() {
			this.path=this.$route.path
		},
		watch:{
			$route(to,from){
				this.path=to.path
			}
		},
		methods:{
			goTo(path){
				this.$router.replace(path)
			}
		}
	}
</script>

<style scoped>
	.bottom-tab {
		width: 100%;
		height: 60px;
		background-color: #f5f6fa;
		position: fixed;
		left: 0px;
		bottom: 0px;
		display: flex;
		z-index: 999;
	}

	.tab-item {
		display: flex;
		flex:1;
		flex-direction:column;
		align-items:center;
		justify-content:center;
		/* font-size:20px; */
		color:#666
	}
	.on {
		color:#42BD56;
	}
</style>
