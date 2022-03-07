<template>
	<div>
		<ul v-for="p in dyList" :key="p.id">
			<li>
				<div class="head">
					<img class="tx" :src="p.tx" />
					<div style="margin-right:180px;">
						<span>{{p.user}}</span>
						<br />
						<small>说</small>
					</div>
					<small style="margin-right:20px;">{{p.time}}</small>
					<small @click="more=true"><i class="el-icon-more"></i></small>
					<Drawer placement="bottom" :closable="false" v-model="more">
						<!-- 收藏的时候内容也要通过事件总线传给主页 -->
						<h3>收藏</h3>
						<h3>分享</h3>
						<h3>投诉<i class="el-icon-arrow-right"></i></h3>
						<small>辱骂攻击、广告、违法违规等</small>
						<h3 @click="more=false">取消</h3>
					</Drawer>
				</div>
				
				<div class="main" @click="goTo('/dydetail',p.id)">
					<p>{{p.content}}</p>
					<img 
						v-if="Object.prototype.hasOwnProperty.call(p,'contentImg')" 
						:src="p.contentImg" />
				</div>
				
				<div class="dis">
					<!-- 超出三行不显示 -->
					<small>{{p.others1}}</small>
					<small>{{p.others2}}</small>
				</div>
				<div class=" func">
					<span>
						<Icon type="md-thumbs-up" />10
					</span>
					<span @click="goTo('/dydetail',p.id)"><i class="el-icon-chat-square"></i>13</span>
					
					<span @click="goTo('/trans',p.id)">
						<Icon type="ios-git-compare" />2
					</span>
				</div>
			</li>
		</ul>
		<div style="height:60px;width:100%;"></div>
	</div>
</template>

<script>
	import bus from '../../bus.js'
	import ContentImg from '../../components/ContentImg.vue'
	export default {
		name: 'Dynamic',
		// components:{ContentImg},
		data() {
			return {
				hasPic:false,
				more:false,
				picSrc:'',
				list:[],
				dyList: [{
						id: '001',
						tx: 'https://s3.bmp.ovh/imgs/2021/08/8b08dff6ead65d08.jpg',
						user: 'emmm',
						others1: '伤心的人：狠狠懂了。。。',
						others2: '地狱犬：谁来扶贫。。救',
						content: '今天又是没钱花的一天',
						time: '昨天20:19'
					},
					{
						id: '002',
						tx: 'https://s3.bmp.ovh/imgs/2021/08/491cd9170ff2fa99.jpg',
						user: '穷鬼一个',
						others1: '咸鱼卖家：你是畜生也不行',
						others2: 'xxxxxx',
						content: '我是学生，送我',
						time: '15分钟前'
					},
					{
						id: '003',
						tx: 'https://s3.bmp.ovh/imgs/2021/08/af1d0128f1f785d8.jpg',
						user: 'dog',
						others1: '猫猫头：我馋了',
						others2: '哈士奇：看起来(╯▽╰ )好香~~',
						content: '晒晒成品|太好吃了这个蛋糕',
						contentImg:'https://s3.bmp.ovh/imgs/2021/08/3d71018bfe606e22.jpg',
						time: '两小时前'
					},
				],			
			}	
		},
		methods: {
			goTo(path,id) {
				for(let i in this.dyList){
					if(this.dyList[i].id==id){
						this.list.push(this.dyList[i])
					}
				}
				bus.$emit('updateData1', this.list)
				this.$router.push(path)
			}
		},
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	body {
		background-color:#f5f6fa;
	}

	.head {
		display: flex;
		padding: 10px;
	}

	.tx {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		padding-right: 10px;
	}

	.head small {
		color: #808080;
	}

	.main {
		padding: 0 10px 0 10px;
	}

	.dis {
		margin: 10px;
		border-left: 1px solid #BBBBBB;
		display: flex;
		flex-direction: column;
	}

	.dis small {
		color: #818181;
	}

	.func {
		padding: 10px;
		display: flex;
		justify-content: space-around;
	}

	ul {
		list-style: none;
	}

	.main img {
		height: 70px;
		width: 70px;
	}

	li:first-child {
		background-color: white;
	}

	li:not(:first-child) {
		background-color: white;
		margin-top: 5px;
	}
</style>
