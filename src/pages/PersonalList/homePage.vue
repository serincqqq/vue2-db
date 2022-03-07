<template>
	<div>
		<EditorBtn @click.native="goTo('/editor')"></EditorBtn>
		<div class="audio">
			<div>
				<span>影视</span>
				<span>图书</span>
				<span>音乐</span>
			</div>
			<!-- <div class="swiper-container">
				<div class="swiper-wrapper">
					<div v-for="f in filmList" :key="f.id" class="swiper-slide">
						<div class="group1">
							<img :src="p.imgurl" />
							<span>{{p.groupname}}</span>
						</div>
					</div>
				</div>
			</div> -->
			<ul>
				<li v-for="f in filmList" :key="f.id">
					<div class="second">
						<span>{{f.type}}</span>
						<small>{{f.num}}</small>
					</div>

					<img :src="f.poster" />
				</li>
			</ul>
		</div>

		<div class="group">
			<span>我的小组<i>>></i></span>
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div v-for="p in $store.state.GroupHeadAbout.groups" :key="p.id" class="swiper-slide">
						<div class="group1">
							<img :src="p.imgurl" />
							<span>{{p.groupname}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="main">


			<ul>
				<li v-for="d in dyList" :key="d.id">
					<div class="say">
						<div class="user">
							<img :src="userTx" />
							<small>{{d.type}}</small>
						</div>
						<div class="other">
							<small style=": ;">{{d.time}}</small>
							<i @click="bottom = true" class="el-icon-more"></i>
							<Drawer height="200px"  placement="bottom" :closable="false" v-model="bottom">
								<div class="drawer">
									<span>收藏</span>
									<span>分享</span>
									<span style="color: firebrick;">删除动态</span>
									<span @click="bottom=false" style="background-color: white;" >取消</span>
								</div>
							</Drawer>
						</div>
					</div>

					<div class="content">
						{{d.mySay}}

						<div v-if="d.type=='转发'" class="trans">
							<div class="title">
								<span>
									{{d.groupname}}
									<small>的小组讨论</small>
								</span>

							</div>
							<strong>{{d.title}}</strong>
							<span>{{d.content}}</span>
							<br>
							<img src="../../common/img/01.jpg" />
						</div>
					</div>

					<div class="func">
						<span>
							<Icon type="md-thumbs-up" />赞
						</span>
						<span><i class="el-icon-chat-square"> </i>回复</span>
						<span>
							<Icon type="ios-git-compare" />转发
						</span>
					</div>
				</li>

			</ul>
			<div class="end"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
<<<<<<< HEAD
	import 'swiper/dist/css/swiper.min.css'
=======
	import 'swiper/css/swiper.css'
>>>>>>> 6901f85 (first)
	import EditorBtn from '../../components/EditorBtn.vue'
	
	export default {
		name: 'homePage',
		components:{
			EditorBtn
		},
		data() {
			return {
				bottom: false,
				maintype: this.$route.params.position, // 这里的mainTpe是路由参数
				userTx: sessionStorage.getItem('userTx'),
				filmList: [{
						id: '001',
						type: '想看',
						num: '10',
						poster: 'https://s3.bmp.ovh/imgs/2021/09/5c919c49c8e3bd96.jpg'
					},
					{
						id: '002',
						type: '在看',
						num: '3',
						poster: 'https://s3.bmp.ovh/imgs/2021/09/4ed7db3fd67a3bef.jpg'
					},
					{
						id: '003',
						type: '看过',
						num: '4',
						poster: 'https://s3.bmp.ovh/imgs/2021/09/cdfac0bd25451ecb.jpg'
					}
				],
				dyList: [{
						id: '0001',
						type: '转发',
						mySay: 'mark',
						groupname: '未命名小组',
						title: '追剧的日子真幸福~',
						content: '放假在家的日子看了好多剧，准备给家人们安利一下',
						time: '08-05'
					},
					{
						id: '0002',
						type: '说',
						mySay: '不想开学，谁来9我',
						time: '15分钟前'
					},
				]
			};
		},
		mounted() {
			this.swiper = new Swiper('.swiper-container', {
					//direction: 'vertical', // 垂直切换选项
					loop: true, // 循环模式选项
					pagination: {
						el: '.swiper-pagination',
					},
					slidesPerView: 7,
					spaceBetween: 10,
					freeMode: true,
					observer: true, //修改swiper自己或子元素时，自动初始化swiper
					observeParents: true,
				}),
				this.$store.dispatch('GroupHeadAbout/loadingGroup');
		},
		watch: {
			// 利用watch方法检测路由变化：
			$route: function(to, from) {
				if (to.path !== from.path) {
					this.maintype = to.params.position // 获取参数 这里的mainTpe是我的路由参数
					console.log(to.params.position)
					if (to.params.position == 1) {
						var main = document.querySelector('.main');
						main.scrollIntoView();
					}
				}
			}
		},
		methods:{
			goTo(path){
				this.$router.replace(path)
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.end {
		height: 60px;
		width: 100%;
	}

	.say {
		display: flex;
		justify-content: space-between;
		/* width: 100%; */

		padding-bottom: 10px;
	}

	.drawer {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		
	}
	.ivu-drawer-content{
		background-color:#f5f6fa ;
	}

	.drawer span {
		margin-top: 10px;
		text-align: center;
		font-size: 20px;
		
		box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
	}

	.other,
	.user {
		display: flex;
		align-items: center;

	}

	.user small {
		color: gray;
	}

	.user img {
		height: 30px;
		width: 30px;
		border-radius: 50%;
		margin-right: 10px;
	}

	.other small {
		margin-right: 20px;
		color: gray;
	}

	ul {
		list-style: none;
		margin-top: 10px;
	}

	li {
		margin-top: 10px;
		background-color: white;
		padding: 20px 20px 10px 20px;
	}

	.func {
		margin-top: 20px;
		display: flex;
		justify-content: space-around;
	}

	.trans {
		background-color: #f5f6fa;
		padding: 10px;

	}

	.title small {
		font-size: 16px;
		color: gray;
	}

	.title span {
		font-size: 16px;
		color: #42BD56;
	}

	.group {
		display: flex;
	}

	.group1 span {

		font-size: 14px;
		color: gray;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.audio span {
		margin-right: 10px;
	}

	.main {
		margin-top: 10px;
		background-color: white;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.group,
	.audio {
		display: flex;
		flex-direction: column;
		/* height:100px; */
		padding-left: 10px;
		padding: 10px;
		margin: 10px 5px 0 5px;
		background-color: white;
		border-radius: 10px;
	}

	.audio ul {
		margin-top: 10px;
		list-style: none;

	}

	.audio li {
		padding: 5px;
		display: flex;
		justify-content: space-between;
		margin-right: 10px;
		float: left;
		width: 100px;
		height: 60px;
		border: 1px solid gainsboro;
		border-radius: 10px;
		align-items: center;
		/* 	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1) */
	}

	.second {
		display: flex;
		flex-direction: column;
		margin-right: 5px;
	}

	.audio li img {
		border-radius: 5px;
		height: 50px;
		width: 40px;

	}

	.group ul {
		list-style: none;
		display: flex;
		flex-direction: row;
	}

	.swiper-container {
		width: 100%;
		height: 100px;
	}

	.swiper-slide {
		font-size: 18px;
		display: flex;
	}

	.group li {
		margin-right: 10px;
		width: 50px;
	}

	.group1 img,
	.group li img {
		margin-top: 10px;
		width: 40px;
		height: 40px;
		border-radius: 5px;
	}
	
</style>
