<template>
	<div>
		<Banner></Banner>
		<div class="tabs">
			<div class="tab">
				<div class="tab-item">
					<router-link to="/home/dynamic">动态</router-link>
				</div>
			</div>
			
			<div class="tab">
				<div class="tab-item">
					<router-link to="/home/recommend"><span>推荐</span></router-link>
				</div>
			</div>
		</div>
		
		<router-view></router-view>
		<FooterGuide></FooterGuide>
	</div>
</template>

<script>
	import Banner from '../components/Banner.vue'
	import FooterGuide from './FooterGuide.vue'
	export default {
		name: 'Home',
		data() {
			return {
				
			}
		},
		components: {
			Banner,
			FooterGuide
		},
	}
</script>

<style scoped>
	.tabs{
			margin-top: 60px;
			display: flex;
			width: 100%;
		}
		.tab {
			height: 40px;
			line-height: 40px;
			background-color: #fff;
			border-bottom: 1px rgba(7, 17, 27, 0.1);
		}
	
		.tab-item {
			margin-left: 10px;
			font-size:20px;
			color: #000000;
		}
		a {
			display:flex;
			position: relative;
			width:100%;
			justify-content: space-around;
			color: #000000;
		}
	
		a.router-link-active {
			color: #000000;
		}
	
		a.router-link-active::after {
			content: '';
			position: absolute;
			left: 50%;
			bottom: 1px;
			width: 35px;
			height: 2px;
			transform: translateX(-50%);
			background-color: #000000;
		}
	
</style>



