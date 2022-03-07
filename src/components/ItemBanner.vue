<template>
	<div class="head">
		<div class="func">
			<span @click="back"><i class="el-icon-arrow-left"></i></span>
			
			<span @click="value8 = true"><i class="el-icon-more"></i></span>
			<Drawer placement="bottom" :closable="false" v-model="value8">
				<div class="all">
					<div class="first"><i class="el-icon-message"></i>提醒和私信</div>
					<div class="second">
						<!-- 要做一个滑动效果 -->
						<span><i style="font-size: 40px;" class="el-icon-printer"></i></span>
						<img src="../common/img/pyq.jpg">
						<img src="../common/img/dblogo.jpg">
						<img src="../common/img/wx.jpg">
					</div>
					<div class="third">
						<span><Icon size="40" type="ios-chatboxes" /></span>
						<span><Icon size="40" type="ios-link" /></span>
						<span><Icon size="40" type="ios-more" /></span>
					</div>
				</div>
			</Drawer>
			
		</div>
		<div class="title">
			<img src="../common/img/tech.jpg" />
			<div style="display: flex;flex-direction: column;width:240px;">
				<span style="font-size: 18px;color:white">
					Women In Tech女性科技从业者集合地
				</span>
				<span style="font-size: 14px; color: #ffffff;">33107 科技姐妹</span>
			</div>
			<button>已加入</button>
		</div>
		<div class="des">	
			<p style="color:#dcdde1"><span style="font-weight: bold;color: white;">小组简介:</span>我们是工程师，产品经理,数据科学家，设计师，运营,我们都是科技行业的职场女性!希望大家可以分享...</p>
			<span style="font-size:20px;color: white"><i class="el-icon-arrow-right"></i></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ItemBanner',
		methods: {
			back() {
				this.$router.push({
					path: '/group'
				})
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
	* {
		margin: 0;
		padding: 0;
	}
	
	.head {
		background-color:#ee5253;
		padding: 20px;
	}
	
	.func {
		display: flex;
		justify-content: space-between;
		box-sizing: content-box;
		width: 100%;
		font-size: 20px;
		align-items: flex-end
	}
	.func span{
		color: white;
		font-size:25px;
	}
	.title {
		display: flex;
		margin-top: 10px;
	}
	
	.title img {
		margin-top:10px;
		height: 60px;
		width: 60px;
		margin-right: 20px;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
	}
	
	.title span {
		margin-left: ;
	}
	.title button{
		height:30px;
		width: 50px;
		border-radius: 5px;
		color:#8395a7;
		opacity:0.3;
		border-style:none;
	
	}
	.des{
		margin-top:20px;
		display: flex;
		font-size:14px;
	}
	.all{
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.first{
		margin-left:20px;
		margin-right:20px;
		background-color: white;
		font-size:20px;
		padding:10px 0 10px 0;
		width:100%;
		box-sizing: content-box;
		border-radius: 10px;
		
	}
	.second{
		display: flex;
		margin-top:20px;
		border-bottom:1px solid white;
		padding-bottom:20px;
		/* margin:20px 0 20px 0; */
	}
	.third{
		display: flex;
		margin-top:20px;
		margin-right: auto;
		/* padding:10px; */
	}
	.second span,
	.second img,
	.third span{
		width: 50px;
		height: 50px;
		border-radius:10px;
		margin-right:20px;
	}
</style>
