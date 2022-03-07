<template>
	<div>
		<ul>
			<li v-for="rc in RcList" :key="rc.id">
				<div class="title">
					<img :src="rc.groupTx" />
					<span style="font-weight: 500;">{{rc.groupName}}</span>
				</div>
				<div class="main">
					<strong>{{rc.title}}</strong>
					<span style="font-size: 18px;">{{rc.groupContent}}</span>
					<br />
					<img v-if="Object.prototype.hasOwnProperty.call(rc,'contentImg')" :src="rc.contentImg" />
					<img v-if="Object.prototype.hasOwnProperty.call(rc,'contentImg1')" :src="rc.contentImg1" />
				</div>

				<div class=" func">
					<span>
						<!-- 回复是弹窗加tab标签页 -->
						<Icon type="md-thumbs-up" />10
					</span>
					<span @click="change" :class="{on:isOn}"><i class="el-icon-chat-square"></i>13</span>
					<span @click="goTo('/rctrans',rc.id)">
						<Icon type="ios-git-compare" />3
					</span>
				</div>

			</li>
		</ul>
		<div style="height:60px;width:100%;"></div>
	</div>
</template>

<script>
	import bus from '../../bus.js'
	export default {
		name: 'Recommend',
		data() {
			return {
				list: [],
				RcList: [{
						id: '001',
						groupTx: 'https://s3.bmp.ovh/imgs/2021/08/b70608faa7c0d93f.jpg',
						groupName: '一天一个头像我最靓',
						title: '有没有这种样子的头像',
						groupContent: 'emmm不知道怎么形容这种感觉',
						contentImg: 'https://s3.bmp.ovh/imgs/2021/08/ce23899410a6e24c.png',
					},
					{
						id: '002',
						groupTx: 'https://s3.bmp.ovh/imgs/2021/08/aab375b84a9bca39.jpg',
						groupName: '杯子种草/拔草基地',
						title: '新的组杯配色到了',
						groupContent: '实物颜色偏粉一点',
						contentImg: 'https://s3.bmp.ovh/imgs/2021/08/d2e96ca4d5398433.jpg',
						contentImg1: 'https://s3.bmp.ovh/imgs/2021/08/6f2285149e1b6b51.jpg'
					},
					{
						id: '003',
						groupTx: 'https://s3.bmp.ovh/imgs/2021/08/b40abc194d388a96.jpg',
						groupName: '九年义务教育查缺补漏小组',
						title: '语文│花呗到底怎么读',
						groupContent: '只有这两个读音，为什么很多人读bei(调值51)(四声)'
					},
				],
			}
		},
		methods: {
			goTo(path, id) {
				for (let i in this.RcList) {
					if (this.RcList[i].id == id) {
						this.list.push(this.RcList[i])
					}
				}
				bus.$emit('Trans', this.RcList)
				this.$router.push(path)
			},
			change() {
				if (this.isOn == false) {
					this.isOn = true
				} else {
					this.isOn = false
				}
			}
		},

	}
</script>

<style scoped>
	.on {
		color: #2ecc71;
	}
	li {
		padding: 10px;
	}

	.title {
		display: flex;
		align-items: center;

	}

	.title img {
		height: 40px;
		width: 40;
		border-radius: 5px;
		margin-right: 10px;
	}

	* {
		margin: 0;
		padding: 0;
	}

	.main strong {
		margin-right: 10px;
		font-size: 18px;
	}

	.main img {
		margin-top: 10px;
		margin-right: 10px;
		width: 70px;
		height: 70px;
	}

	.func {
		margin-top: 10px;
		display: flex;
		justify-content: space-around;
	}

	ul {
		list-style: none;
	}
</style>
