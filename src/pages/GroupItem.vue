<template>
	<div>
		<ItemBanner></ItemBanner>
		<div class="tabs">
			<div class="tab">
				<div class="tab-item">
					<router-link to="/groupitem/all">全部</router-link>
				</div>
			</div>
			
			<div class="tab">
				<div class="tab-item">
					<router-link to="/groupitem/activity"><span>组务&活动</span></router-link>
				</div>
			</div>

			<div class="tab">
				<div class="tab-item">
					<router-link to="/groupitem/ama">AMA</router-link>
				</div>
			</div>	
		</div>

		<router-view></router-view>
		<EditorBtn></EditorBtn>
	</div>
</template>

<script>
	import ItemBanner from '../components/ItemBanner.vue'
	import EditorBtn from '../components/EditorBtn.vue'
	export default {
		name: 'GroupItem',
		components: {
			ItemBanner,
			EditorBtn
		}
	}
</script>

<style scoped>
	.tabs{
		display: flex;
		width: 100%;
		justify-content: space-around;
	}
	.tab {
		height: 40px;
		line-height: 40px;
		background-color: #fff;
		border-bottom: 1px rgba(7, 17, 27, 0.1);
	}

	.tab-item {
		/* width: 30px; */
		margin-left: 10px;
		/* text-align: center; */
		font-size: 14px;
		color: #bdc3c7;;
	}
	a {
		display:flex;
		position: relative;
		width:100%;
		justify-content: space-around;
		color:#bdc3c7;;
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
