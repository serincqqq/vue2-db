<template>
	<div class="content">
		<!-- 定义一个插槽，等着组件的使用者进行填充 -->
		<slot name="Img">没有内容我就会出现</slot>
	</div>
</template>

<script>
	export default{
		name:'ContentImg',
	}
</script>

<style>
	.content img {
		height: 70px;
		width: 70px;
	}
</style>
