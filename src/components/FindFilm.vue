<template>
	<div style="margin-top: 10rem;">
		<h2>找电影</h2>
		<div class="find-banner">
			<span><i class="el-icon-video-play"></i>可播放</span>
			<el-dropdown>
				<span class="el-dropdown-link">
					类型<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>黄金糕</el-dropdown-item>
					<el-dropdown-item>狮子头</el-dropdown-item>
					<el-dropdown-item>螺蛳粉</el-dropdown-item>
					<el-dropdown-item disabled>双皮奶</el-dropdown-item>
					<el-dropdown-item divided>蚵仔煎</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>

			<span>可播放</span>
			<span>可播放</span>
			<span>x</span>
		</div>
		<div class="find-post">
			<img class="find-small" src="../common/poster/1.jpg" />
			<div class="find-big">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<!-- <div class="swiper-slide" style="width: 16rem !important;">
						<img src="../common/poster/3.jpg" /></div>
						<div class="swiper-slide" style="width: 16rem !important;">
						<img src="../common/poster/3.jpg" /></div> -->

						<div class="swiper-slide" style="width: 16rem !important;">Slide 4</div>
						<div class="swiper-slide" style="width: 16rem !important;">Slide 5</div>
						<div class="swiper-slide" style="width: 16rem !important;">Slide 6</div>
						<div class="swiper-slide">Slide 7</div>
						<div class="swiper-slide">Slide 8</div>
						<div class="swiper-slide">Slide 9</div>
						<div class="swiper-slide">Slide 10</div>
					</div>
					<!-- Add Pagination -->
					<div class="swiper-pagination"></div>
				</div>
			</div>
		</div>

		<div>
			<div style="float: left;">
				<h3>电话（2020）</h3>
				<span>星星</span>
				<p>2020/韩国</p>
			</div>
			<div style="float: right;margin-top: 1.25rem;color: yellow;">
				<i class="iconfont icon-xiangkan"></i>
			</div>
		</div>

	</div>
</template>

<script>
	import Swiper from "swiper";
	import 'swiper/css/swiper.css'
	export default {
		mounted() {
			this.swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true //修改swiper的父元素时，自动初始化swiper

			})
		},
	}
</script>

<style scoped>
	.swiper-container {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;

		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.el-dropdown-link {
		cursor: pointer;
		color: #009432;
	}

	.el-icon-arrow-down {
		font-size: 14px;
	}

	.find-banner {
		display: flex;
		justify-content: space-around;
		font-size: 1.125rem;
		font-family: "黑体";
	}

	.find-post {
		margin: 0.625rem;
		display: flex;

	}

	.find-small {
		height: 10rem;
		width: 8rem;
		border-radius: 0.625rem;
	}

	.find-big {
		height: 10rem;
		width: 16rem;
		border-radius: 0.625rem;
	}
</style>
