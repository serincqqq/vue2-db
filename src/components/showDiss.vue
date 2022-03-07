<template>
	<div>
		<div class="father">
			<strong>讨论列表</strong>
			<div class="son">
				<button><i>xxx</i></button>
		
				<div class="tabs">
					<router-link to="/">
						<div class="tab">
							最新
						</div>
					</router-link>
					<router-link>
						<div class="tab">
							热门
						</div>
					</router-link>
					<router-link>
						<div class="tab">
							精华
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'showDiss'
	}
</script>

<style scoped>
	.father {
		padding: 10px;
		display: flex;
		justify-content: space-between;
		align-content: center;
	}
	
	.son {
		display: flex;
		border-radius: 10px;
	}
	
	.son button {
		background-color: #F5F6FA;
		height: 30px;
		width: 30px;
		border: none;
		margin-right: 10px;
		border-radius: 5px;
	}
	
	.tabs {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		background-color: #F5F6FA;
		justify-content: center;
		border-radius: 5px;
	}
	
	.tab {
		padding: 5px;
	}
	
	a {
		font-size: 14px;
		display: flex;
		position: relative;
		width: 100%;
		height: 100%;
		justify-content: space-around;
		color: gainsboro;
		box-sizing: border-box;
	}
	
	a.router-link-active {
		color: #000000;
	}
	
	a.router-link-active::after {
		color: #000000;
		border-radius: 5px;
		content: '';
		position: absolute;
		left: 50%;
		width: 100%;
		height: 100%;
		transform: translateX(-50%);
		background-color: white;
	}
</style>
