<template>
	<div>
		<div class="banner">
			<div class="group">
				<span class="back" @click="back">
					<i class="el-icon-arrow-left"></i>
				</span>
				<img src="../common/gift.jpg" />
				<div class="detail">
					<span class="groupname">A gift for you</span>
					<span style="color:#E4E7ED;">19999人加入</span>
				</div>

			</div>

			<span class="more" @click="value8 = true">
				<i class="el-icon-more"></i>
			</span>

			<!-- <Button @click="value8 = true" type="primary">Bottom</Button> -->

		</div>
		<Drawer placement="bottom" :closable="false" v-model="value8">
			<div class="all">
				<div class="first" @click="goTo('/msg')">
					<i class="el-icon-message"></i>
					提醒和私信
				</div>
				<div class="second">
					<!-- 全部换成图标 -->
					<img src="../common/dyj.jpg" />
					<img src="../common/img/dblogo.jpg">
					<img src="../common/img/wx.jpg">
					<img src="../common/img/pyq.jpg">
				</div>
				<div class="third">
					<span>
						<Icon type="ios-chatboxes" />
					</span>
					<span>
						<Icon type="ios-link" />
					</span>
					<span>
						<Icon type="ios-more" />
					</span>
				</div>
			</div>
		</Drawer>
	</div>
</template>

<script>
	export default {
		name: 'DissBanner',
		methods: {
			back() {
				this.$router.push({
					path: '/group'
				})
			},
			goTo(path){
				this.$router.replace(path)
			}
		},
		data() {
			return {
				value8: false
			}
		}
	}
</script>

<style scoped>
	body {
		background-color: #ecf0f1;
	}

	.banner {
		display: flex;
		background-color: #e17055;
		align-items: center;
		width: 100%;
		height: 60px;
		justify-content: flex-end;
		padding:10px;
	}

	.back {
		margin-right: 30px;
		font-size: 30px;
		color: white;
		/* margin-left: 10px; */
	}

	.group {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.group p {
		padding: 0px;
	}

	.detail {
		display: flex;
		flex-direction: column;
		margin-right: 50px;
	}

	.groupname {
		font-size: 22px;
		color: white;
	}

	.more {
		font-size: 30px;
		color: white;
		margin-left: auto;
		/* margin-bottom: 10px; */
	}

	.group img {
		width: 40px;
		height: 40px;
		/* margin-top:10px; */
		margin-right: 20px;
		border-radius: 4px;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.all {
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.first {
		margin-left: 20px;
		margin-right: 20px;
		background-color: white;
		font-size: 20px;
		padding: 10px 0 10px 0;
		width: 100%;
		box-sizing: content-box;
		border-radius: 10px;

	}

	.second {
		display: flex;
		margin-top: 20px;
		border-bottom: 1px solid white;
		padding-bottom: 20px;
		/* margin:20px 0 20px 0; */
	}

	.third {
		display: flex;
		margin-top: 20px;
		margin-right: auto;
		font-size:25px;
		/* padding:10px; */
	}

	.third span,
	.second span,
	.second img {
		width: 50px;
		height: 50px;
		border-radius: 10px;
		margin-right: 20px;
	}
</style>
