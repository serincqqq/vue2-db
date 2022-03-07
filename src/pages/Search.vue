<template>
	<div>
		<div class="first">
			<form class="search-box">
				<form action="javascript:return true;">
					<input v-model="searchText" v-on:input="search" type="search" class="search-input"
						placeholder="搜索" />
				</form>
			</form>
			<span @click="back">取消</span>
		</div>
		<hr />

		<div v-show="isSearch">
			<div class="specail">
				<img src="../common/saohei.jpg" />
				<div class="des">
					<span>
						<i style="margin-right:5px;color: pink;" class="el-icon-video-play"></i>
						<strong>扫黑风暴</strong>
						<span>(2021)</span>
					</span>
					<span>
						<el-rate
							v-model="value"							
							disabled
							show-score							
							text-color="#ff9900"
							:max="10"
							score-template="{value}"
							>
						</el-rate>
					</span>
					<div class="tag">
						<span>电视剧</span>
						<small>中国大陆/剧情 犯罪/五百</small>
					</div>
				</div>
			</div>
			<ul>				
				<li v-for="item in searchList" :key="item">
					<i class="el-icon-search"></i>
					{{item}}
				</li>
			</ul>
		</div>

		<div v-show="!isSearch">
			<div style="margin-top:20px;" class="second">
				<div class="history">
					<strong>历史</strong>
					<span>如何回复</span>
					<span>电视剧</span>
					<span>小说</span>
				</div>
				<br />
				<div class="suggest">
					<strong>建议</strong>
					<span>逢考必过</span>
					<span>家长里短</span>
					<span>豆瓣推理小说Top10</span>
				</div>
			</div>
			<div class="swiper-container" style="margin-top: 20px;">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<div class="card">
							<img src="../common/img/film.png" />
						</div>
					</div>

					<div class="swiper-slide">
						<div class="card">
							<img src="../common/img/hotgroup.png" />
						</div>
					</div>

					<div class="swiper-slide">
						<div class="card">
							<img src="../common/img/zj.png" />
						</div>
					</div>

				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>
			</div>
			<div style="margin:20px;">
				<img id="ad" src="../common/img/ad1.png" />
			</div>
			<div class="hot">
				<h4>热门话题</h4>
				<br />
				<span><i>xx</i>夏天里最遗憾的事</span>
				<span><i>xx</i>你为什么不想谈恋爱了</span>
			</div>
			<div class="end">-以上内容，每日更新-</div>
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
	export default {
		name: 'Search',
		methods: {
			back() {
				this.$router.go(-1); //返回上一层
			},
			search() {
				this.isSearch = true
				if (this.searchText != '') {

					this.searchList = this.list.filter((text) => {
						return text.match(this.searchText);
					})
				} else {
					console.log('还未输入')
				}

				//console.log(this.searchList)
			}
		},
		data() {
			return {
				value:7.8,
				isSearch: false,
				searchText: '',
				searchList: [],
				list: [
					"扫黑·决战",
					"扫黑",
					"扫黑风暴",
					"扫黑风暴全集"
				],

			}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				//direction: 'vertical', // 垂直切换选项
				//loop: true, // 循环模式选项
				observer: true, //修改swiper自己或子元素时，自动初始化swiper
				observeParents: true,
				// 如果需要分页器
				pagination: '.swiper-pagination',
				slidesPerView: 'auto',
				paginationClickable: true,
				spaceBetween: 10,

			})

		},
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.specail {
		display: flex;
		padding: 20px;
		align-items: center;
		border-bottom: 1px solid rgb(0 0 0 / 10%);
		box-shadow: ;
	}

	.specail img {
		height: 70px;
		width: 52px;
		margin-right: 10px;
		border-radius: 5px;
	}

	.des {
		display: flex;
		flex-direction: column;

	}

	.tag span {
		background-color: #ecf0f1;
		font-size: 14px;
		color: gray;
		font-weight: 700;
		padding: 3px;
		border-radius: 5px;
		margin-right: 5px;
	}

	.tag small {
		font-size: 15px;
		color: gray;
	}

	ul {
		padding: 20px;
		list-style: none;
	}

	li {
		font-size: 18px;
		font-weight: 700;
		margin-top: 10px;
		font-family: STHeiti;
	}

	li i {
		margin-right: 20px;
	}

	* {
		touch-action: none;
	}

	.swiper-container {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		background: #fff;
		width: 60%;
		display: flex;
		/* 		justify-content: center;
		align-items: center; */
		margin-left: 20px;
	}

	.swiper-slide:nth-child(2n) {
		width: 60%;
	}

	.swiper-slide:nth-child(3n) {
		width: 40%;
	}

	.first {
		padding: 10px;
		display: flex;
		align-items: center;
	}

	.first span {
		margin-left: 20px;
		color: #42BD56;
		font-size: 18px;
	}

	.search-box {
		width: 300px;
		/* flex: 300px 0 0; */
		animation: open ease-in .3s;
		height: 30px;
		border-radius: 10px;
		border: 1px solid #dfdfdf;
		color: rgba(0, 0, 0, .25);
		background-color: #f7f7f7;
		font-size: 15px;
		line-height: 21px;
		padding-left: 10px;
	}

	.search-input {
		box-sizing: border-box;
		-webkit-appearance: none;
		border: 0;
		padding-left: 20px;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 0;
		background-size: 17.33333px;
		border-radius: 3px;
		width: 100%;
		height: 31px;
		font-size: 14px;
		outline-offset: -2px;
		overflow: visible;
		-webkit-tap-highlight-color: transparent;
		font-family: sans-serif;
		font-size: 100%;
		line-height: 1.15;
		outline: none;
	}

	strong {
		padding-right: 10px;
	}

	.history span,
	.suggest span {
		margin-right: 10px;
		padding: 3px;
		border: 1px solid gray;
		background-color: #ecf0f1;
		border-radius: 5px;
		opacity: 0.8;
		color: #000000;
	}

	.card img {
		width: 260px;
		height: 456px;
	}

	#ad {
		height: 120px;
		width: 100%;
	}

	.hot {
		padding: 20px;
		display: flex;
		flex-direction: column;
	}

	.hot i {
		margin-right: 10px;
	}

	.hot span {
		margin-top: 10px;
		font-size: 20px;
	}

	.end {
		background-color: gainsboro;
		height: 50px;
		width: 100%;
		text-align: center;
		line-height: 50px;
		color: gray;
	}
</style>
