<template>
	<div>
		<!-- 遮罩层-->
		<div class="mask" v-show="showMask"></div>
		<!-- 功能区，相当于下方 -->


		<div v-show="!showNavx" id="rightx" class="rightx">
			<div v-if="!isUp" class="btn"></div>
			<!-- <Tabs v-if="isUp" /> -->
			<div class="homeMain">
				<el-tabs v-if="isUp" v-model="activeName" @tab-click="handleClick">
					<el-tab-pane :label="'回复'+replyNum" name="first">
						<Reply></Reply>
					</el-tab-pane>

					<el-tab-pane :label="'赞'+upNum" name="second">
						<Up></Up>
					</el-tab-pane>

					<el-tab-pane :label="'转发'+transNum" name="third">
						<Trans></Trans>
					</el-tab-pane>
					<el-tab-pane :label="'收藏'+collectNum" name="fourth">
						<Collect></Collect>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>

		<div id="right" class="right" v-show="!showNav">
			<!-- 这里放功能区 -->
			<span>
				<i class="el-icon-chat-square" @click="tan"></i>10
			</span>
			<span :class="{on:isOn}" @click="addUp">
				<Icon type="md-thumbs-up" />{{upNum}}
			</span>
			<span>
				<Icon type="ios-git-compare" />4
			</span>
			<span><i class="el-icon-collection-tag"></i>8</span>
		</div>

		<div v-show="showNav" class="lessNavigation">
			<input type="text" placeholder="写回复" />
			<span>
				<Icon :class="{on:isOn}" @click="addUp" type="md-thumbs-up" />
			</span>
			<span>
				<Icon type="ios-git-compare" />
			</span>
			<span><i class="el-icon-collection-tag"></i></span>
		</div>
	</div>
</template>

<script>
	//import Tabs from './Tabs.vue'
	import Reply from './Invitation/FuncReply.vue'
	import Collect from './Invitation/FuncCollect.vue'
	import Trans from './Invitation/FuncTrans.vue'
	import Up from './Invitation/FuncUp.vue'

	export default {
		name: 'DragDiv',
		components: {
			Reply,
			Collect,
			Trans,
			Up
		},
		props: ["type"],
		data() {
			return {
				activeName: 'first',
				replyNum: 20,
				transNum: 10,
				upNum: 4,
				collectNum: 10,

				showMask: false,
				showNav: false,
				isUp: false,
				isOn: false,
				showNavx: false,
				test: false
			}
		},
		methods: {
			tan() {
				let right = document.getElementById('rightx');
				right.style.height = document.documentElement.clientHeight - 60 + 'px';
				this.isUp = true
				this.showMask = true
				this.showNav = true
				this.showNavx = false
			},
			addUp() {
				if(this.isOn == false){
					this.isOn = true
					this.upNum++
				}else{
					this.isOn = false
					this.upNum--
				}
				
			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			dragControllerDiv() {
				let right = document.getElementById('rightx');
				let btn = document.querySelector('.btn')
				let startY = 0;
				let y = 0;
				let righthei = 0;


				btn.addEventListener('touchstart', (e) => {
					this.showMask = true;
					startY = e.targetTouches[0].pageY;
					//console.log(startY)
					y = btn.offsetTop + 656;
					//console.log(y);
					e.preventDefault();
					e.stopPropagation();
					document.body.style.overflow = 'hidden';
				})
				let max = document.documentElement.clientHeight / 2;

				document.body.addEventListener('touchmove', (e) => {
					//this.showMask = true;
					let diffVal = y + (e.targetTouches[0].pageY - startY);
					//console.log(diffVal);
					//736 console.log(document.documentElement.clientHeight)
					if (diffVal <= document.documentElement.clientHeight && diffVal >= 70) {
						right.style.height = document.documentElement.clientHeight - diffVal + 'px';
						righthei = document.documentElement.clientHeight - diffVal;
					}
				})

				document.body.addEventListener('touchend', (e) => {
					document.body.style.overflow = 'visible'
					if (righthei <= max) {
						//console.log(righthei);
						if (this.test == false) {
							right.style.height = 70 + 'px';
							this.showMask = false;
							this.isUp = false
							this.showNav = false;
						} else {
							right.style.height = 70 + 'px';
							this.showMask = false;
							this.isUp = false
							this.showNav = true;
						}

					} else {
						right.style.height = document.documentElement.clientHeight - 60 + 'px';
						this.isUp = true
						this.showMask = true;
						this.showNav = true;
					}
				})
			},
			scrollLength() {
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
				const top = document.documentElement.scrollTop
				//console.log(scrollTop)
				if (scrollTop > 600) {
					let opacity = top / 240
					opacity = opacity > 1 ? 1 : opacity
					this.showOpacity = {
						opacity
					}
					this.showNav = true
					this.showNavx = true
					this.test = true
					//this.isUp
				} else {
					this.showNav = false
					this.showNavx = false
					this.test = false
				}
			},
		},
		mounted() {
			this.dragControllerDiv()
			window.addEventListener('scroll', this.scrollLength)

			if (this.type == '收藏') {
				this.activeName = 'fourth'
				this.tan()
			}
			if (this.type == '赞') {
				this.activeName = 'second'
				this.tan()
			}
			if (this.type == '评论') {
				this.activeName = 'first'
				this.tan()
			}
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.windowScroll)
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	.homeMain{
		-moz-border-radius-topright:30px;
		-moz-border-radius-topleft:30px;
		padding-left: 20px;	
		background-color: #ffffff;
	}
	.on {
		color: #42BD56;
	}

	html,
	body {
		height: 100%;
		width: 100%;
	}

	.btn {
		height: 8px;
		width: 60px;
		border-radius: 10px;
		background-color: #cacaca;
		margin: 10px auto;
		opacity: 0.5;
	}

	.mask {

		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.1);
		z-index: 2;
	}

	.rightx {
		border-radius:10px;
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #f5f6fa;
		height: 70px;
		z-index: 88;
	}

	.right {
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #f5f6fa;

		z-index: 99;
		display: flex;
		justify-content: space-between;
		height: 50px;
	}

	.right span {
		margin-left: 30px;
		margin-right: 30px;
		font-size: 22px;
	}

	.test {
		width: 100px;
		height: 100px;
		background-color: #000000;
	}

	.lessNavigation {
		position: fixed;
		left: 0px;
		bottom: 0px;
		width: 100%;
		height: 50px;
		z-index: 99 !important;
		background-color: #FFFFFF;
		justify-content: space-around;
		align-items: center;
		display: flex;
	}

	.lessNavigation span {
		margin-left: 10px;
		margin-right: 10px;
		font-size: 22px;
	}

	.lessNavigation input {
		caret-color: #000000;
		height: 30px;
		width: 150px;
		border-radius: 30px;
		margin-left: 20px;
		/* 	margin-right: 20px; */
		border: 1px solid #dfdfdf;
		color: rgba(0, 0, 0, .25);
		background-color: #f7f7f7;
		outline: none;
	}
</style>
