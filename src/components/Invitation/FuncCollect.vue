<template>
	<div>
		<ul v-for="p in collectList" :key="p.id">
			<li>
				<img :src="p.tximg" />
				<div class="trans">
					<div class="ud">
						<span class="user">{{p.username}}</span>
						<span class="date">{{p.date}}</span>
					</div>			
					<span style="margin-top:5px;">收藏到豆列<span style="color: #42BD56;margin-left:10px;">{{p.favorite}}</span></span>
				</div>
			</li>
		</ul>
		<Another></Another>
	</div>
</template>

<script>
	import Another from './Another.vue'
	export default{
		name:'FuncCollect',
		components:{Another},
		data(){
			return {
				collectList:[
					{id:'001',username:'管理员',favorite:'buy',tximg:'https://s3.bmp.ovh/imgs/2021/08/51f32791efb8eab3.jpg',date:'08-16'},
					{id:'002',username:'江湖骗子',favorite:'哈哈哈',tximg:'https://s3.bmp.ovh/imgs/2021/08/1102bf3176bbc12d.jpg',date:'07-19'},
					{id:'003',username:'koko',favorite:'剁手',tximg:'https://s3.bmp.ovh/imgs/2021/08/baa0aacbeff314a7.jpg',date:'11-6'},
					{id:'004',username:'爱吃香菜',favorite:'买买买',tximg:'https://s3.bmp.ovh/imgs/2021/08/2fc2a60d9a4203e2.jpg',date:'09-26'}
				]
			}
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	ul{
		list-style: none;
	}
	li{
		margin-top:20px;
		display: flex;
		width:100%;
		box-shadow: 0 1px 4px rgb(0 0 0 / 5%);
	}
	img{
		width:40px;
		height:40px;
		margin-top:5px;
		margin-right: 20px;
		border-radius:50%;
	}
	.trans{
		display: flex;
		flex-direction: column;
	}
	span{
		margin-right:10px;
	}
	.user{
		font-weight: bold;
		font-size:20px;
	}
	.date{
		color: #bdc3c7;
		margin-top:5px;
		font-size:14px;
	}
</style>
