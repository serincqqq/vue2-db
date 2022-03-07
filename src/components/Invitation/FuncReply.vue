<template>
	<div>
		<span style="font-size:18px;font-weight: bold;">最赞回复</span>
		<ul class="replys">
			<li>
				<img src="../../common/img/02.jpg" />
				<div class="reply">
					<span>用户名</span>
					<p>《蛤蟆先生去看心理医生一》我在很迷茫的
						时候读到了这本书，随着剧情的发展不同于我想的那样，
						蛤蟆先生可能会原谅原生家庭和生活环境中的朋友给他带
						来的消极的影响和伤害吧，而看到的是蛤蟆先生在接受一系
						列的心理咨询后，
						蛤蟆先生没有原谅他的父亲,而是
						接受了自己，学会了如何与真实的自我相处
					</p>
					<span>
						<Icon :class="{on:isOn}" @click="addUp" type="md-thumbs-up" />{{upNum}}
					</span>
				</div>
				<span><i class="el-icon-more"></i></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'FuncReply',
		data(){
			return {
				isOn: false,
				upNum:1
			}
		},
		methods:{
			addUp() {
				this.isOn = true
				this.upNum++
			}
		}
	}
</script>

<style scoped>
	.replys {
		list-style: none;
		padding: 10px;
	}
	
	.replys li {
		display: flex;
		width: 100%;
		font-size: 20px;
	}
	
	.replys img {
		width: 30px;
		height: 30px;
		margin-right: 20px;
		border-radius: 50%;
	}
	
	.reply {
		display: flex;
		flex-direction: column;
	}
</style>
