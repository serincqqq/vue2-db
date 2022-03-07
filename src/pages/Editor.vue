<template>
	<div class="editor" style="height:100vh;">
		<i @click="back" class="el-icon-close"></i>
		<h2>新的动态</h2>
		<div class="point">
			<span>试试添加话题或书影音...</span>
		</div>
		<div class="edit">
			<img src="../common/img/tx01.jpg" />
			<textarea rows="" cols="" placeholder="独处，但并不孤独"></textarea>
			<i class="el-icon-picture"></i>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Editor',
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	html,
	body {
		height: 100vh;
	}

	.editor {
		padding: 10px;
		background-color: #f5f6fa;
	}
	.editor i{
		font-size: 23px;
	}
	.editor h2,
	.point,
	.edit {
		margin-top:20px;
	}
	.point {
		padding: 15px;
		border-radius: 10px;
		background-color: white;
	}

	.edit {
		position: relative;
		margin-top: 20px;
		padding: 10px;
		display: flex;
		/* align-items: center; */
		border-radius: 10px;
		background-color: white;
		height: 55%;
	}

	.edit img {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.edit textarea {
		margin-top: 5px;
		color: gray;
		font-size: 14px;
		border: none;
		caret-color: #42BD56;
		outline: none;
	}

	.edit i {
		position: absolute;
		bottom: 15px;
		left: 15px;
		font-size: 22px
	}
</style>
