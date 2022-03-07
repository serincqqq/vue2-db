<template>
	<div>
		<section class="diss">
			<h2 class="title">
				<span>正在讨论</span>
			</h2>
			<div class="dissList">
				<!-- 格式 -->
				<ul>
					<!-- <i class="el-icon-s-comment"></i> -->
					<li 
						v-for="p in $store.state.GroupMainAbout.diss" 
						:key="p.id"
						@click="goTo('/diss')"
					>
					<router-link to="/group/diss"></router-link>
						<i class="el-icon-s-comment"></i>
						<span class="big">
							<h4>{{p.title}}</h4>
							<span class="from">
								<img src="../common/img/01.jpg" />
								<p>{{p.groupname}}</p>
							</span>
						</span>
					
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex'

	export default {
		name: 'GroupMain',
		mounted() {
			this.$store.dispatch('GroupMainAbout/loadingDiss');
		},
		methods:{
			goTo(path){
				this.$router.replace(path)
			}
		}
	}
</script>

<style scoped>
	.title {
		display: flex;
		margin: 0 0 20px;
		line-height: 1.1;
		font-size: 22px;
		color: rgba(0, 0, 0, .9);
		font-weight: 550;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		justify-content: space-between;
		margin-block-start: 0.83em;
		margin-block-end: 0.83em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		box-shadow: 0 1px 4px rgb(0 0 0 / 5%);
	}

	ul {
		list-style: none;
	}

	.dissList {
		display: flex;
		font-size: 20px;
		flex-direction: column;
		margin-top: 10px;
	}

	.dissList li {
		display: flex;
		box-shadow: 0 1px 4px rgb(0 0 0 / 5%);
	}

	.big {
		display: flex;
		margin-left: 10px;
		margin-bottom: 20px;
		flex-direction: column;
	}

	.dissList i {
		margin-left: 10px;
		color: #f39c12;
		margin-right: 20px;
	}

	.dissList h4 {
		font-weight: 400;
		font-size: 20px;
		color: #111;
	}

	.from {
		display: flex;
	}

	.dissList img {
		margin-top: 10px;
		height: 25px;
		width: 25px;
		margin-right: 15px;
		border: 1px solid gainsboro;
		border-radius: 4px;
	}

	.from p {
		margin-top: 15px;
		color: #bbb;
		font-size: 13px;
	}
</style>
