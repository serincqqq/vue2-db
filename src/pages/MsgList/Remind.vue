<template>
	<div>
		<div class="all">
			<small>全部提醒</small>
			<button :class="{btnOn:isOn}" @click="allRead">全部已读</button>
		</div>
		<div class="book">
			<strong>书影音消息</strong>
			<i @click="back" style="font-size:22px;" class="el-icon-arrow-right"></i>
		</div>

		<div class="msg">
			<ul v-for="m in MsgList" :key="m.id">
				<li @click="goTo('/diss',m.id)" :class="{on:isOn}">
					<div style="margin-right: 10px;">
						<small>{{m.user}}{{m.type}}了你的小组讨论</small>
						<strong style="font-size: 16px;">
							{{title}}
						</strong>
						<span v-if="Object.prototype.hasOwnProperty.call(m,'collectName')">
							<small>到豆列</small>{{m.collectName}}
						</span>
						
						<div style="margin:10px 0px 10px 0px;">
							<small style="font-size: 10px;">{{m.updateTime}}</small>
						</div>
					</div>
					<i class="el-icon-more"></i>
				</li>
				<!-- 写一个判断，如果这些li都没被点击过，则样式为绿色（未读的状态） -->
			</ul>
		</div>
	</div>
</template>

<script>
	import bus from '../../bus.js'
	export default{
		name:'Remind',
		data() {
			return {
				list:[],
				isOn:false,
				activeName: 'first',
				title: '给你看看我送出去的生日礼物吧~',
				MsgList: [{
						id: '001',
						user: 'keme',
						type: "收藏",
						collectName: '礼物',
						updateTime:'4天前更新'
					},
					{
						id: '002',
						user: '阮软',
						type: "评论",
						updateTime:'2天前更新'
					},
					{
						id: '003',
						user: 'kiki',
						type: "赞",
						updateTime:'半个小时前更新'
					}
				]
			}
		},
		methods:{
			allRead(){
				this.isOn=true		
			},
			back() {
				this.$router.go(-1)
			},
			goTo(path,id) {
				for(let i in this.MsgList){
					if(this.MsgList[i].id==id){
						this.list=this.MsgList[i].type
					}
				}
				bus.$emit('Type', this.list)
				this.$router.push(path)
				
			}
		}
	}
</script>

<style scoped>
	.btnOn{
		color: gainsboro;
		background-color:  #f1f2f6;
	}
	.on{
		background-color: white;
	}
	.all {
		padding: 10px;
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	
	button {
		padding: 3px 5px 3px 5px;
		/* line-height:20px; */
		border: none;
		background-color: #f2f7f6;
		color: #42BD56;
		border-radius: 5px;
	}
	
	.all small {
		color: #bdc3c7;
		font-size: 16px;
	}
	
	.book {
		font-size:18px;
		margin: 10px;
		padding: 15px;
		border-radius: 5px;
		line-height: 25px;
		margin-top: 20px;
		display: flex;
		background-color: #f1f2f6;
		justify-content: space-between;
	}
	
	.msg {
		margin-top: 20px;
	}
	
	ul {
		display: flex;
		list-style: none;
		flex-direction: column;
	}
	
	.msg small {
		margin-right: 10px;
		font-size: 16px;
		color: #bdc3c7;
	}
	
	li {
		display: flex;
		justify-content: space-between;
		padding: 10px;
		background-color: #f2f7f6;
		box-shadow: 0 1px 4px rgb(0 0 0 / 5%);
	}
	
	li i {
		margin-top: 5px;
		margin-left: 10px;
	}
</style>
