<template>
	<div>
		<ul v-for="p in userList" :key='p.id'>
			<li>
				<img :src="p.tximg" />
				<span class="user">{{p.username}}</span>
				<span class="date">{{p.date}}</span>
			</li>
		</ul>
		<Another></Another>
	</div>
</template>

<script>
	import Another from './Another.vue'
	export default{
		name:'FuncUp',
		components:{Another},
		data(){
			return {
				userList:[
					{id:'001',username:'管理员',tximg:'https://s3.bmp.ovh/imgs/2021/08/51f32791efb8eab3.jpg',date:'08-16'},
					{id:'002',username:'江湖骗子',tximg:'https://s3.bmp.ovh/imgs/2021/08/1102bf3176bbc12d.jpg',date:'07-19'},
					{id:'003',username:'koko',tximg:'https://s3.bmp.ovh/imgs/2021/08/baa0aacbeff314a7.jpg',date:'11-6'},
					{id:'004',username:'爱吃香菜',tximg:'https://s3.bmp.ovh/imgs/2021/08/2fc2a60d9a4203e2.jpg',date:'09-26'}
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
		display: flex;
		height:60px;
		box-shadow: 0 1px 7px rgb(0 0 0 / 5%);
		/* box-shadow: 0 1px 4px rgb(0 0 0 / 5%); */
	}
	img{
		width:30px;
		height:30px;
		border-radius: 50%;
		margin:10px;
	}
	.user{
		margin-top:10px;
		font-size:20px;
		font-weight: bold;
	}
	.date{
		color: #bdc3c7;
		margin-left:20px;
		margin-top:15px;
		font-size:14px;
	}
</style>
