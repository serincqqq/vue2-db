<template>
	<div class="father_swiper">
		<div style="height: 11.25rem;" class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" style="height: 12.5rem !important;">
					<div style="margin-right: 1.25rem;">
						<HotFilm></HotFilm>
						<!-- <img src="../common/poster/1.jpg" /> -->
					</div>

				</div>
				<div class="swiper-slide" style="width: 100px !important;">
					<div style="margin-right: 1.25rem;">
						<HotFilm></HotFilm>
						<!-- <img src="../common/poster/1.jpg" /> -->
					</div>

				</div>
				<div class="swiper-slide">Slide 5</div>
				<div class="swiper-slide">Slide 6</div>
				<div class="swiper-slide">Slide 7</div>
				<div class="swiper-slide">Slide 8</div>
				<div class="swiper-slide">Slide 9</div>
				<div class="swiper-slide">Slide 10</div>
			</div>
		</div>
	</div>
</template>

<script>
	import HotFilm from './HotFilm.vue'
	import Swiper from "swiper";
	import 'swiper/css/swiper.css'
	export default {
		name: 'FilmList',
		mounted() {
			this.swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				slidesPerView: '1.2',
				centeredSlides: true,
				paginationClickable: true,
				spaceBetween: 30,
				freeMode: true,
			})

		},
		components: {
			HotFilm
		}
	}
</script>

<style scoped>
	.swiper-wrapper {
		margin-top: 0.625rem;
		height: 15.625rem;
		width: 30rem !important;
	}

	.swiper-container {
		margin-top: 1.875rem;
		overflow: visible;
		padding: 1rem;
		height: 0px;
		/* position: absolute;
		top:18rem; */
	}

	img {
		height: 15.625rem;
		width: 24rem !important;
		border-radius: 0.625rem;
		margin-right: 0.625rem;
		border: 1px solid gainsboro;
	}

	.swiper-slide {
		height: 100px;
		width: 120px;
		margin-right: 0.625rem;
	}
</style>
