<template>
	<div>
		<div class="first">
			<i style="color: #000000;font-size: 23px;margin-top: 10px;" class="el-icon-arrow-left"></i>
			<div class="tab">
				<div class="tab-item">
					<router-link to="/msg/remind">提醒</router-link>
				</div>
			</div>

			<div class="tab">
				<div class="tab-item">
					<router-link to="/msg/private"><span>私信</span></router-link>
				</div>
			</div>
			<div></div>
		</div>

		<router-view></router-view>

		
	</div>
</template>

<script>
	export default {
		name: 'Msg',
		
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
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
		font-size: 18px;
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
	.first {
		padding: 10px;
		font-size: 18px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		color: #bdc3c7;
	}

</style>
