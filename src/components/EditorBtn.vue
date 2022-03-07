<template>
	<div class="editor">
		<i class="el-icon-edit"></i>
	</div>
</template>

<script>
	export default{
		name:'EditorBtn'
	}
</script>

<style scoped>
	.editor{
		position: fixed;
		background-color: #000000;
		z-index: 999;
		bottom: 70px;
		right: 20px;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		text-align: center;
	}
	.editor i{
		color: white;
		line-height: 50px;
		font-size: 23px;
	}
</style>
