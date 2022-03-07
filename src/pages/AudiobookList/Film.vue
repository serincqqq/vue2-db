<template>
<<<<<<< HEAD
	<div>
		<h1>film</h1>
=======
	<div style="width: 100%;display: flex;flex-direction: column;align-items: auto;justify-content: center;">
		<div class="container">
			<div class="func">

				<i class="el-icon-search"></i>
				找电影
			</div>
			<div class="func">
				<i class="el-icon-s-data"></i>
				豆瓣榜单
			</div>
			<div class="func">
				<i class="el-icon-video-play"></i>
				即将上映
			</div>
			<div class="func">
				<i class="el-icon-files"></i>
				豆瓣片单
			</div>
		</div>

		<div class="film-type">
			<p>影院热映</p>
			|
			<p>豆瓣热门</p>
		</div>

		<div style="height: 11.25rem;" class="swiper-container">
			<div class="swiper-wrapper">
				<div style="width: 5.5rem !important;" class="swiper-slide">
					<div style="margin-right: 1.25rem;">
						<img src="../../common/poster/1.jpg" />
					</div>

				</div>
				<div class="swiper-slide">
					<img src="../../common/poster/2.jpg" />
				</div>

				<div class="swiper-slide">
					<img src="../../common/poster/3.jpg" />
				</div>
				<div class="swiper-slide">
					<img src="../../common/poster/4.jpg" />
				</div>
				<div class="swiper-slide">Slide 5</div>
				<div class="swiper-slide">Slide 6</div>
				<div class="swiper-slide">Slide 7</div>
				<div class="swiper-slide">Slide 8</div>
				<div class="swiper-slide">Slide 9</div>
				<div class="swiper-slide">Slide 10</div>
			</div>
		</div>
		<FilmList></FilmList>
		<FindFilm></FindFilm>
>>>>>>> 6901f85 (first)
	</div>
</template>

<script>
<<<<<<< HEAD
	export default{
		name:'Film'
	}
</script>

<style>
=======
	import Swiper from "swiper";
	import 'swiper/css/swiper.css'
	import FilmList from '../../components/FilmList.vue'
	import FindFilm from '../../components/FindFilm.vue'
	export default {
		name: 'Film',
		components: {
			FilmList,
			FindFilm
		},
		mounted() {
			this.swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				slidesPerView: 3,
				centeredSlides: true,
				paginationClickable: true,
				spaceBetween: 30,
				freeMode: true,
			})

		}
	}
</script>

<style scoped>
	.swiper-wrapper {
		margin-top: 0.625rem;
		height: 10rem;
	}

	.swiper-container {
		margin-top: 1.875rem;
		overflow: visible;
		padding: 1rem;
		height: 0px;
		/* position: absolute;
		top:18rem; */
	}

	.swiper-slide {
		height: 100px;
		width: 120px;
		margin-right: 0.625rem;
	}

	img {
		height: 200px;
		width: 140px;
		border-radius: 0.625rem;
		margin-right: 0.625rem;
		border: 1px solid gainsboro;
	}

	.film-type {
		padding: 0.625rem;
		font-size: 1.875rem;
		display: flex;
	}

	.container {
		margin-left: 20px;
		width: 100%;
		display: grid;
		/* grid-template-columns: repeat(4, 25%); */
		grid-template-columns: 5rem 5rem 5rem 5rem;
		margin: 1.25rem;
		grid-column-gap: 1.25rem;
	}

	.func {
		height: 60px;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.swiper-container {
		width: 500px;
		height: 300px;
	
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
>>>>>>> 6901f85 (first)
</style>
