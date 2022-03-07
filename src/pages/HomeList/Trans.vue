<template>
	<div style="padding: 20px;">
		<!-- 遮罩弹窗 -->
		<div class="mask" v-show="showMask"></div>
		<div class="warn" v-show="showMask">
			<transition
				:appear="true" 
				enter-active-class="animate__backInDown"
				leave-active-class="animate__backOutUp">
				<div v-if="showMsg" class="pub">正在发布</div>
			</transition>
				<div v-if="!showMsg" class="pub1">发布成功</div>
		</div>

		<div class="head">
			<i @click="back" style="font-size: 25px;font-weight: 600;" class="el-icon-close"></i>
			<button @click="pulish">发布</button>
		</div>
		<div v-show="isShow" class="title">
			<img :src="val1[0].tx" />
			<!-- <h3>{{val1[0].user}}</h3> -->
			<input @keyup="Show" v-model="value1" placeholder="说说看法...">
		</div>
		<!-- 绑定这两个样式之前的切换 -->
		<transition name="animate__animated animate__bounce" :appear="true" enter-active-class="animate__backInRight"
			leave-active-class="animate__backInLeft">
			<div v-show="!isShow" style="margin-top: 10px" class="title1">
				<input value="" placeholder="说说看法...">
			</div>
		</transition>

		<div class="main">
			<!-- <img src="../../common/img/cake.jpg" />
			<span>晒晒成品|太好吃了这个蛋糕</span> -->
			<img
				v-if="Object.prototype.hasOwnProperty.call(val1[0],'contentImg')" 
				:src="val1[0].contentImg" />
			<span>{{val1[0].content}}</span>
		</div>
	</div>

</template>

<script>
	import bus from '../../bus.js'
	import 'animate.css'

	export default {
		name: 'Trans',
		data() {
			return {
				isShow: true,
				value1: '',
				showMask: false,
				showMsg: true
			}
		},
		methods: {
			Show() {
				if (this.value1 == null || this.value1 == undefined || this.value1 == '') {
					console.log('!!!');
					//this.isShow = true
				} else {
					this.isShow = false
				}
			},
			back() {
				this.$router.go(-1)
			},
			pulish() {
				this.showMask = true
				setTimeout(() => {
					this.showMsg = false
					setTimeout(()=>{
						this.showMask = false
					},1000)
					
				}, 3000)
			}
		},
		computed: {
			val1() {
				// 依赖并返回bus中的val1
				return bus.val1
			}
		}
	}
</script>

<style scoped>
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 10px;
		box-shadow: 0 1px 4px rgb(0 0 0 / 5%);
	}

	.head button {
		font-size: 15px;
		text-align: center;
		height: 30px;
		width: 70px;
		color: white;
		background-color: #42BD56;
		border: none;
		border-radius: 5px;
	}

	.title {
		padding: 10px;
		display: flex;
		align-items: center;
	}

	.title img {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.title span {
		color: #BBBBBB;
		font-size: 18px;
	}

	.main {
		padding: 10px;
		display: flex;
		margin-top: 200px;
		background-color: #f5f6fa;
	}

	.main img {
		margin-right: 10px;
		border-radius: 5px;
		width: 50px;
		height: 50px;
		float: left;
	}

	.title1 input,
	.title input {
		color: #BBBBBB;
		font-size: 18px;
		border: none;
		caret-color: #42BD56;
		outline: none;
	}

	.mask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.1);
	}

	.warn {
		width: 30%;
		position: absolute;
		top: 30px;
		left: 0;
		right: 0;
		margin: auto;
	}

	.pub {
		border-radius: 20px;
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 18px;
		background-color: #42BD56;
		color: white;
	}

	.pub1 {
		border-radius: 20px;
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 18px;
		background-color: white;
		color: #42BD56;
	}
</style>
