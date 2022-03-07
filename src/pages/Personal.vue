<template>
	<div>
		<Drawer placement="left" :closable="false" v-model="value2">
			<div class="head">
				<span><i style="font-size:22px;" class="el-icon-close"></i></span>
				<span>
					<Icon size="22" type="md-qr-scanner" />
				</span>
			</div>
			<div class="own">
				<img src="../common/img/03.jpg" />
				<div>
					<span style="font-weight: 550;font-size:18px;">迪士尼在逃王子</span>
					<br />
					<!-- <h3 style="font-weight: 600;">迪士尼在逃王子</h3> -->
					<span style="font-size:14px;color: #BBBBBB;">资料与账号> </span>
				</div>
			</div>
			<div class="main1">
				<span><i class="el-icon-collection-tag"></i>我的收藏</span>
				<span><i class="el-icon-circle-plus-outline"></i>我的关注</span>
				<span><i class="el-icon-time"></i>浏览历史</span>
				<br />
				<span><i class="el-icon-bell"></i>推送</span>
				<span>
					<Icon size="25" type="ios-hand-outline" />隐私
				</span>
				<span><i class="el-icon-setting"></i>设置</span>
				<span><i class="el-icon-question"></i>帮助与反馈</span>
			</div>
		</Drawer>
		<div v-if="isShow" id="after">
			<div class="tao">

				<div class="tao1">
					<Icon @click="value2 = true" size="25" style="margin-right:30px;color:#42BD56;" type="ios-menu" />


					<img :src="userTx" />
					<div class="tao2">
						<strong>{{username}}</strong>
						<small style="font-size: 14px;color: gainsboro;">海口</small>
					</div>
				</div>

				<i style="font-size: 25px;" class="el-icon-message"></i>
			</div>

		</div>

		<div class="frame">
			<img src="../common/img/ad.png" />
			<div class="black"></div>

		</div>
		<div class="all">
			<div id="yuan">
				<div class="g">
					<Icon @click="value2 = true" size="25" style="margin-right:30px;color: white;" type="ios-menu" />
					<i style="font-size: 25px;color: white;" class="el-icon-message"></i>
				</div>
				<div class="pic">
					<img :src="userTx" />
				</div>
			</div>

			<div class="des">
				<strong>{{username}}
					<i class="el-icon-male"></i>
				</strong>
				<small>海南</small>
				<span>这个人很懒,<br>什么都没留下</span>
			</div>
			<div class="back">
				<div class="first">
					<span>关注 23</span>
					<span>被关注 23</span>
				</div>
				<br />

				<div class="tabs">
					<div class="tab">
						<div class="tab-item">
							<router-link to="/personal/homepage/0">主页</router-link>
						</div>
					</div>

					<div class="tab">
						<div class="tab-item">
							<router-link to="/personal/homepage/1">动态</router-link>
						</div>
					</div>

					<div class="tab">
						<div class="tab-item">
							<router-link to="/personal/audio">书影音</router-link>
						</div>
					</div>
					<div class="tab">
						<div class="tab-item">
							<router-link to="/personal/photo">相册</router-link>
						</div>
					</div>
				</div>


				<router-view></router-view>
				
			</div>
		</div>
		<FooterGuide></FooterGuide>
	</div>
</template>

<script>
	import FooterGuide from './FooterGuide.vue'
	export default {
		name: 'Personal',
		data() {
			return { 
				//获取用户信息到主页
				sdata: sessionStorage.getItem('data'),
				username: sessionStorage.getItem('userName'),
				isAuth: "", //是否保持登录状态
				isShow: false,
				value2: false,
				userTx:sessionStorage.getItem('userTx'),
			}
		},
		components: {
			FooterGuide
		},
		mounted() {
			this.ControllNav()
		},
		methods: {
			ControllNav() {
				var all = document.querySelector('.all');
				var after = document.querySelector('#after');
				all.onscroll = function() {
					//console.log(all.scrollTop);
					if (all.scrollTop >= 200) {
						this.isShow = true

					} else {
						this.isShow = false
					}
				}
			},
			mao(){
				var main=document.querySelector('.main');
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	html,
	body {
		height: 100vh;
		width: 100vh;
	}

	.head {
		padding: 20px 20px 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.own {
		padding: 20px;
		display: flex;
		align-items: center;
	}

	.own img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.main1 {
		display: flex;
		padding-left: 20px;
		flex-direction: column;
		justify-content: center;
	}

	.main1 i {
		margin-right: 10px;
		font-size: 22px;
	}

	.main1 span {
		margin-top: 10px;
		font-size: 18px;
	}

	.frame {
		width: 100%;
		height: 300px;
		margin: 0 auto;
		position: relative;
		bottom: 0;
	}

	.frame img {
		width: 100%;
	}

	.black {
		width: 100%;
		height: 100%;
		background-color: #757575;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.3;
	}

	.all {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		overflow-y: scroll;
		overflow-x: hidden;

	}

	#after {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 60px;
		background-color: white;
		z-index: 999;
	}

	.des i {
		margin-left: 10px;
		font-size: 22px;
		background-color: #000000;
		color: #d63031;
	}

	.tao {
		padding: 5px 20px 5px 20px;
		display: flex;
		align-items: center;
		font-size: 20px;
		justify-content: space-between;
	}

	.tao i {
		color: #42BD56;
	}

	.tao1 {
		display: flex;
		align-items: center;
	}

	.tao1 img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
	}

	.tao2 {
		display: flex;
		flex-direction: column;
	}

	.g {
		padding: 20px;
		display: flex;
		justify-content: space-between;
	}

	.pic {
		display: flex;
		justify-content: center;
		margin-top: 20px;
	}

	.pic img {
		height: 70px;
		width: 70px;
		border-radius: 50%;
		border: 2px solid white;
	}

	.des {
		margin-top: 20px;
		margin-left: 10px;
		display: flex;
		flex-direction: column;
	}

	.des strong {
		font-weight: 550;
		font-size: 20px;
		color: white;
	}

	.des span,
	.des small {
		margin-top: 5px;
		color: white;
	}

	.des span {
		font-size: 14px;
	}

	.back {
		margin-top: 10px;
		padding: 20px 0px 0 0px;
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: #f5f6fa;
		border-top-left-radius: 7px;
		border-top-right-radius: 7px;
		overflow: auto;
	}

	.first {
		padding-left: 10px;
		font-size: 12px;
	}

	.first span {
		margin-right: 10px;
		font-family: sansserif;
		font-weight: 600;
	}

	.tabs{
		padding-left: 10px;
		display: flex;
		width: 100%;
	}
	.tab {
		margin-right: 10px;
		height: 40px;
		line-height: 40px;
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
		font-size:18px;
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
