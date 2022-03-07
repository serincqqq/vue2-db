<template>
	<div class="banner1">
		<section class="mygroup">
			<h2 class="title">
				<span>我的小组</span>
				<a class="all" href="javascript:;">全部></a>
			</h2>
			<!-- 从这里开始的所有标签都在容器里面 -->
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<ul class="groupList">
							<!-- 如果按照豆瓣的话最多只能有10个span，而且换行 -->
							<li class="test" v-for="p in $store.state.GroupHeadAbout.groups" :key="p.id"
								@click="goTo('/groupitem')">
								<span><img :src="p.imgurl" /></span>
								<p>{{p.groupname}}</p>
							</li>
						</ul>
					</div>

					<div class="swiper-slide">Slide 3</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Swiper from 'swiper'
<<<<<<< HEAD
	import 'swiper/dist/css/swiper.min.css'
=======
	import 'swiper/css/swiper.css'
>>>>>>> 6901f85 (first)
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex'

	export default {
		name: 'GroupHead',
		data() {
			return {
				//imgUrl:'https://s3.bmp.ovh/imgs/2021/08/50a43f5f662c244c.jpg',
				//src:('../assets/user.png') 
			}
		},
		mounted() {
			this.swiper = new Swiper('.swiper-container', {
					//direction: 'vertical', // 垂直切换选项
					loop: true, // 循环模式选项
					pagination: {
						el: '.swiper-pagination',
<<<<<<< HEAD
					},
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
					observeParents:true,
=======
						observer: true, //修改swiper自己或子元素时，自动初始化swiper
						observeParents: true,
					}
>>>>>>> 6901f85 (first)
				}),
				this.$store.dispatch('GroupHeadAbout/loadingGroup');
		},
		computed: {
			sum() {
				return this.$store.state.sum;
			}
		},
		methods: {
			goTo(path) {
				this.$router.replace(path)
			}
		}
	}
</script>
<style scoped>
	* {
		touch-action: none;
	}

<<<<<<< HEAD
	.banner1 {
		margin-top: 20px;
	}

	.mygroup,
	.diss {
		padding: 10px 15px;
=======
	.mygroup,
	.diss {
		padding: 0.625rem 1.5rem;
>>>>>>> 6901f85 (first)
		background-color: #fff;
		overflow: hidden;
		margin: 0;
		display: block;
	}

	.title {
		display: flex;
		margin: 0 0 20px;
		line-height: 1.1;
		font-size: 22px;
		color: rgba(0, 0, 0, .9);
		font-weight: 550;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		justify-content: space-between;
		margin-block-start: 0.83em;
		margin-block-end: 0.83em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
	}

	.all {
		font-size: 15px;
		line-height: 16px;
		color: #818181;
		margin: 0 0 0 auto;
		/* line-height: 1; */
		display: block;
		text-decoration: none;
		background-color: transparent;
	}

	.groupList {
<<<<<<< HEAD
		width: 384px;
=======
		width: 100%;
	
>>>>>>> 6901f85 (first)
		display: flex;
		/* justify-content: space-around; */
		flex-wrap: wrap;
		align-content: space-between;
<<<<<<< HEAD
		padding: 0px 15px;
=======
	
>>>>>>> 6901f85 (first)
		/* margin: 0 0 20px; */
	}

	.test {
		display: flex;
		border-radius: 4px;
<<<<<<< HEAD
		margin-right: 20px;
=======
		margin-right: 1rem;
>>>>>>> 6901f85 (first)
		padding-bottom: 20px;
		flex-direction: column;
	}

	.test span,
	.test img {
<<<<<<< HEAD
		border-radius: 4px;
		height: 50px;
		width: 50px;
=======
		height: 3.5rem;
		width:3.5rem;
		border-radius: 0.625rem;
>>>>>>> 6901f85 (first)
		/* 	background-color: red; */

	}

	.test span {
<<<<<<< HEAD
		border: 1px solid gainsboro;
=======
		
>>>>>>> 6901f85 (first)
	}

	.test p {
		width: 50px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
</style>
