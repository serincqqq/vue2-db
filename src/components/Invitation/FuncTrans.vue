<template>
	<div>
		<ul v-for="t in transList" :key='t.id'>
			<li>
				<img :src="t.tximg" />
				<div class="trans">
					<span style="font-weight: bold;">{{t.username}}</span>
					<span style="margin-top:5px;">转发</span>
				</div>
			</li>
		</ul>
		<Another></Another>
	</div>
</template>

<script>
	import Another from './Another.vue'
	export default{
		name:'FuncTrans',
		components:{Another},
		data(){
			return {
				transList:[
					{id:'001',username:'管理员',tximg:'https://s3.bmp.ovh/imgs/2021/08/51f32791efb8eab3.jpg'},
					{id:'002',username:'江湖骗子',tximg:'https://s3.bmp.ovh/imgs/2021/08/1102bf3176bbc12d.jpg'},
					{id:'003',username:'koko',tximg:'https://s3.bmp.ovh/imgs/2021/08/baa0aacbeff314a7.jpg'},
					{id:'004',username:'爱吃香菜',tximg:'https://s3.bmp.ovh/imgs/2021/08/2fc2a60d9a4203e2.jpg'}
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
		/* padding:20px; */
	}
	li{
		display: flex;
		width:100%;
		margin-top:10px;
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
</style>