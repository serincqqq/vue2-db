<template>
	<div class="father">
		<div class="bg">
			<img src="../common/poster/p1.jpg" style="height: 15.625rem;
			width: 20rem;" />
			<!-- <div class="content content-front">我是内容</div> -->
		</div>
		<div class="content">
			<h2>实时热门榜单</h2>
			<div class="film">
				<div>
					<div class="detail">
						1
						<img src="../common/poster/2.jpg" />
						<div class="filmInfo">花束般的恋爱
							<!-- <span>星</span> -->
							<div class="rating">
								<a href="#1">★</a>
								<a href="#2">★</a>
								<a href="#3">★</a>
								<a href="#4">★</a>
								<a href="#5">★</a>
							</div>
						</div>
					</div>

				</div>
				<div>
					<div class="detail">
						2
						<img src="../common/poster/1.jpg" />
						<div class="filmInfo">花束般的恋爱
							<!-- <span>星</span> -->
							<div class="rating">
								<a href="#1">★</a>
								<a href="#2">★</a>
								<a href="#3">★</a>
								<a href="#4">★</a>
								<a href="#5">★</a>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div class="detail">
						3
						<img src="../common/poster/2.jpg" />
						<div class="filmInfo">花束般的恋爱
							<!-- <span>星</span> -->
							<div class="rating">
								<a href="#1">★</a>
								<a href="#2">★</a>
								<a href="#3">★</a>
								<a href="#4">★</a>
								<a href="#5">★</a>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HotFilm'
	}
</script>

<style scoped>
	.bg {
		/* background-image: url(img/poster/2.jpg); */
		height: 15.625rem;
		width: 20rem;
		border-radius: 10px;
		background-color: #009432;
		filter: blur(2px);
		position: absolute;

	}

	.film {
		float: left;
		display: grid;
		grid-template-rows: repeat(3, 33.33%);
		grid-gap: 0.625rem;
		font-size: 1.5rem;
	}

	.father {
		position: relative;
	}

	.content {
		position: absolute;
		z-index: 99;
		padding: 0.3rem 0rem 0rem 2rem;
		color: white;
	}

	.film img {
		margin: 0 1rem 0 1rem;
		height: 3rem;
		width: 2.5rem;
		border-radius: 0.5rem;
	}

	.detail {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.filmInfo {
		display: flex;
		font-size: 1.2rem;
		flex-direction: column;
		letter-spacing: 0.1rem;
	}

	a {
		color: #aaa;
		text-decoration: none;

	}

	a:nth-child(1),
	a:nth-child(2),
	a:nth-child(3),
	a:nth-child(4) {
		color: orange;
	}
</style>
