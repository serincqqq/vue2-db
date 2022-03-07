<template>
	<div style="background-color:#ecf0f1;">
		<DissBanner></DissBanner>

		<div class="main">
<<<<<<< HEAD
			<h1>给你看看我送出去的生日礼物吧~</h1>
			<img src="../common/3d.png" />
			<p>
				
=======
			<h2>给你看看我送出去的生日礼物吧~</h2>
			<img src="../common/3d.png" />
			<p>

>>>>>>> 6901f85 (first)
				1.禁止微那个商及个人打着分享礼物的旗号打明广及暗广
				处理办法：违者删帖删评论封禁，火眼金睛的姐妹们如果发现了可以dd我
				另外：组内不交易。注意甄别。
				上赶着给别人送钱俺也没话说，购物请选择有售后保障的正规厂家/店铺及平台
				<br />
				2.求助讨论帖评论里禁止推荐微那个商以及个人手作以及非正规渠道的广告产品
<<<<<<< HEAD
				
				处理办法：违者删帖删评论封禁
				<br />
				3.禁止水军以及任何形式的引流
				
				包括微信 公众号 小红书 助力 微博 拉群 奇怪二维码等
				（别引流了吧宝子们，组已经这么糊了，想方设法的让组员移步你别的社交软件真的太难看了）
				
				处理办法：违者删帖删评论封禁
			</p>
=======

				处理办法：违者删帖删评论封禁
				<br />
				3.禁止水军以及任何形式的引流

				包括微信 公众号 小红书 助力 微博 拉群 奇怪二维码等
				（别引流了吧宝子们，组已经这么糊了，想方设法的让组员移步你别的社交软件真的太难看了）

				处理办法：违者删帖删评论封禁
			</p>
			<div class="video_bgc">
				<video class="video_show" controls="" src="../common/video.mp4"></video>
			</div>
>>>>>>> 6901f85 (first)
			<!-- <DragDiv></DragDiv> -->
		</div>
		<div class="ad">
			<img src="../common/img/ad.png" />
		</div>
		<Drag :type="type"></Drag>
		<DissFunc></DissFunc>
<<<<<<< HEAD
=======

>>>>>>> 6901f85 (first)
	</div>
</template>

<script>
	import DissBanner from '../components/DissBanner.vue'
	import DissFunc from './DissFunc.vue'
	import Drag from '../components/Drag.vue'
	import bus from '../bus.js'
<<<<<<< HEAD
	
=======


>>>>>>> 6901f85 (first)
	export default {
		name: 'Diss',
		components: {
			DissBanner,
			DissFunc,
			Drag
		},
		data() {
			return {
<<<<<<< HEAD
				type:bus.activeType,
				//showNav: false,
				isOn: false,
				list: [],
				//showMask: false
=======
				type: bus.activeType,
				//showNav: false,
				isOn: false,
				list: [],
				//showMask: false	
>>>>>>> 6901f85 (first)
			}
		},
		methods: {
			addUp() {
				if (this.isOn == false) {
					this.isOn = true
				} else {
					this.isOn = false
				}
<<<<<<< HEAD
			},		
		}

=======
			},
		}
>>>>>>> 6901f85 (first)
	}
</script>

<style scoped>
<<<<<<< HEAD
=======
/* 	.video_bgc{
		background-color: black;
	} */
	.video_show{
		margin-top: 0.625rem;
		width: 100%;
	}

>>>>>>> 6901f85 (first)
	* {
		margin: 0;
		padding: 0;
	}

	.on {
		color: #2ecc71;
	}

	.main {
		/* margin-top: 60px; */
		background-color: white;
		display: flex;
		padding: 20px;
		flex-direction: column;
	}

	.ad {
		display: flex;
		background-color: white;
		margin-top: 10px;
		width: 100%;
		justify-content: center;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.ad img {
		width: 370px;
		height: 192px;
		border-radius: 4px;
	}

	.main img {
		padding: 20px;
	}

	.main p {
		font-size: 20px;
	}


	/* 	.listview {
		display: flex;
		height: 100%;
		flex-direction: column;
		overflow-y: auto;
	}

	.listItem {
		line-height: 50px;
		text-align: center;
		border-bottom: 1px solid #999999;
		margin-bottom: -1px;
	} */
</style>
