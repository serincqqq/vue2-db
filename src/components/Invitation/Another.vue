<template>
	<div class="navigation">
		<span @click="trans"><i class="el-icon-chat-square"></i>30</span>
		<span><Icon type="md-thumbs-up"/>20</span>
		<span><Icon type="ios-git-compare" />4</span>
		<span><i class="el-icon-collection-tag"></i>8</span>
	</div>
</template>

<script>
	import bus from '../../bus.js'
	export default{
		name:'Another',
		data(){
			return {
				activename:'first'
			}
		},
		methods:{
			trans(){
				bus.$emit('Active', this.activename)
			}
		
		}
	}
</script>

<style>
	.navigation {
		/* position: absolute; */
		width: 100%;
		height: 50px;
		/* height: 100%; */
		background-color: #f5f6fa;
		position: fixed;
		left: 0px;
		bottom: 0px;
		display: flex;
		z-index: 999;
		justify-content: space-between;
		align-items: center;
	}
	
	.navigation span {
		margin-left: 30px;
		margin-right: 30px;
		font-size: 22px;
	}
</style>
