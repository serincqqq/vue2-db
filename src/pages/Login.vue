<template>
	<div>
		<div class="main">
			<h2>欢迎来到豆瓣</h2>
			<input v-model="userName" type="text" placeholder="手机号/邮箱" />
			<input v-model="passWord" type="password" placeholder="密码" />
			<button @click="login()">登录</button>
		</div>
		<FooterGuide></FooterGuide>
	</div>
	
	
</template>

<script>
	import axios from 'axios'
	import FooterGuide from './FooterGuide.vue'
	export default {
		name: 'Login',
		data() {
			return {
				userName: '',
				passWord: '',
				st:"false"//false为不保存登录
			}
		},
		components:{FooterGuide},
		methods: {
			login() {
				const self = this;
				axios.get('https://www.fastmock.site/mock/a6d72e032beace47874e9e1615572118/mymock/api/users').then(response => {
					var res = response.data.data,
						len = res.length,
						userNameArr = [],
						passWordArr = [],
						ses = window.sessionStorage;
					// 拿到所有的username
					for (var i = 0; i < len; i++) {
						userNameArr.push(res[i].username);
						passWordArr.push(res[i].password);
					}
					//输出存在的用户名
					//console.log(userNameArr, passWordArr);
					//console.log(this.userName,this.passWord);
					if (userNameArr.indexOf(this.userName) === -1) {
						alert('账号不存在！');
					} else {
						//console.log('密码对比');
						var index = userNameArr.indexOf(this.userName);
						if (passWordArr[index] === this.passWord) {
							// 把token放在sessionStorage中
							ses.setItem('data', res[index].token);
							//console.log(res[index].token);
							
							//把用户信息也放在session
							ses.setItem('userTx', res[index].tx);
							ses.setItem('userName', res[index].username);
							
							//修改登录状态
							this.st="true";//修改登录状态为true
							ses.setItem('s',this.st);
							this.$parent.$data.userTitle = res[index].usertitle;
							this.$router.replace('/personal');
							//console.log(this.$router); 
						} else {
							alert('密码错误！')
						}
					}
				}).catch(err => {
					console.log('连接数据库失败！')
				})
			}
		}
	}
</script>

<style scoped>
	body {
		max-width: 100%;
	}
	.main {
		display: flex;
		flex-direction: column;
		margin: 100px auto;
		height:25rem;
		text-align: center;
	}
	h2{
		font-size: 40px;
		color: #42bd56;
		font-weight: 500;
	}
	.main input{
		margin:20px;
		outline: none;
		border: 0;
		border-bottom:1px solid #42BD56;
		color:gainsboro;
		padding-left:10px;
		padding-right:10px;
		font-size: 16px;
	}
	.main input:hover{
		border-bottom: 2px solid #009432;
		caret-color:#009432;
		color: #000000;
	}
	.main button{
		margin:20px;
		height:50px;
		font-size: 18px;
		line-height:50px;
		border-radius:5px;
		border: 0;
		background-color: #42BD56;
		color: white;
	}
</style>
