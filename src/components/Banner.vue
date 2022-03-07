<template>
	<div class="banner">
		<span class="me">
			<span @click="value2 = true">
<<<<<<< HEAD
				<i class="el-icon-s-unfold"></i>
=======
				<i class="el-icon-s-unfold fold"></i>
>>>>>>> 6901f85 (first)
			</span>
			<Drawer placement="left" :closable="false" v-model="value2">
				<div class="head">
					<span><i style="font-size:22px;" class="el-icon-close"></i></span>
					<span><Icon size="22" type="md-qr-scanner" /></span>
				</div>
				<div class="own">
					<img src="../common/img/03.jpg" />
					<div>
						<span style="font-weight: 550;font-size:18px;">迪士尼在逃王子</span>
						<br />
						<!-- <h3 style="font-weight: 600;">迪士尼在逃王子</h3> -->
						<span style="font-size:14px;color: #BBBBBB;">资料与账号> </span>
					</div>	
				</div>
				<div class="main">
					<span><i class="el-icon-collection-tag"></i>我的收藏</span>
					<span><i class="el-icon-circle-plus-outline"></i>我的关注</span>
					<span><i class="el-icon-time"></i>浏览历史</span>
					<br />
					<span><i class="el-icon-bell"></i>推送</span>
					<span><Icon size="25" type="ios-hand-outline" />隐私</span>
					<span><i class="el-icon-setting"></i>设置</span>
					<span><i class="el-icon-question"></i>帮助与反馈</span>
				</div>
			</Drawer>
		</span>
		<form class="search-box" v-show="!(path==='/personal')">
		
			<input @click="goTo('/search')" type="text" class="search-input" placeholder="搜索" />
		</form>
		<span @click="goTo('/msg')" class="msg">
			<i class="el-icon-message"></i>
		</span>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Banner',
		data(){
			return{
				value2: false,
				path:''
			}
		},
		mounted() {
			this.path=this.$route.path
		},
		watch:{
			$route(to,from){
				this.path=to.path
			}
		},
		methods:{
			goTo(path){
				this.$router.push(path)
			}
		}
	}
</script>

<style scoped>
	* {
			padding: 0;
			margin: 0;
		}
		
		body {
			font-family: -apple-system, BlinkMacSystemFont, Droid Sans, PingFang SC, Helvetica, sans-serif;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			line-height: normal;
			background-color: #fff;
			color: rgba(0, 0, 0, .9);
			max-width: 100%;
			font-size: 12px;
		}
<<<<<<< HEAD
		
		.banner {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			box-sizing: border-box;
			height: 50px;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 100;
			padding: 0 15px;
=======
		.fold{
			margin-left: 0.625rem;
		}
		.banner {
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-sizing: border-box;
			height: 50px;
			/* position: fixed;
			top: 0;
			left: 0; */

			width: 100%;
			z-index: 100;
>>>>>>> 6901f85 (first)
			background-color: #fff;
			box-shadow: 0 1px 4px rgb(0 0 0 / 5%);
		}
		
		.me {
			background-color: transparent;
			color: #42bd56;
			-webkit-tap-highlight-color: transparent;
			font-size: 30px;
			line-height: 31px;
			text-align: right;
<<<<<<< HEAD
			margin-right: 30px;
=======
			margin-right:1.25rem;
>>>>>>> 6901f85 (first)
		}
		
		.msg {
			background-color: transparent;
			color: #42bd56;
			-webkit-tap-highlight-color: transparent;
			font-size: 30px;
			line-height: 31px;
			text-align: center;
<<<<<<< HEAD
			padding: 0 30px;
		}
		
		.search-box {
			width: 250px;
			flex: 250px 0 0;
			animation: open ease-in .3s;
			height: 30px;
=======
			padding: 0 1.25rem;
		}
		
		.search-box {
			width:15.625rem;
			flex: 15.625rem 0 0;
			animation: open ease-in .3s;
			height: 32px;
>>>>>>> 6901f85 (first)
			border-radius: 15px;
			border: 1px solid #dfdfdf;
			color: rgba(0, 0, 0, .25);
			background-color: #f7f7f7;
			font-size: 15px;
<<<<<<< HEAD
			line-height: 21px;
=======
			line-height: 20px;
>>>>>>> 6901f85 (first)
			/* padding-left: 8px; */
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
<<<<<<< HEAD
=======
			margin-left: 0.625rem;
>>>>>>> 6901f85 (first)
		}
	
		.head {
			padding:20px 20px 0 20px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.own{
			padding: 20px;
			display: flex;
			align-items: center;
		}
		.own img{
			height: 40px;
			width: 40px;
			border-radius: 50%;
			margin-right: 10px;
		}
		.main{
			display: flex;
			padding-left: 20px;
			flex-direction: column;
			justify-content: center;
		}
		.main i{
			margin-right: 10px;
			font-size:22px;
		}
		.main span{
			margin-top:10px;
			font-size:18px;
		}
</style>
