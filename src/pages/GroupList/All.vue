<template>
	<div style="padding:10px;">
		<h3>讨论列表</h3>
		<div class="dissList">
			<!-- 格式 -->
			<ul>
				<!-- <i class="el-icon-s-comment"></i> -->
				<li 
					v-for="d in $store.state.DissItemAbout.dissitem" 
					:key="d.id"
				>
					<i class="el-icon-s-comment"></i>
					<span class="big">
						<h4>{{d.title}}</h4>
						<span class="from">
							<img :src="d.txurl" />
							<p>{{d.name}}</p>
						</span>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex'
	
	
	export default{
		name:'All',
		mounted() {
			this.$store.dispatch('DissItemAbout/loadingAll');
		},
	}
</script>

<style scoped>
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
		/* margin-bottom: 20px; */
		flex-direction: column;
	}
	
	.dissList i {
		margin-top: 10px;
		margin-left: 10px;
		color: #f39c12;
		margin-right: 20px;
	}
	
	.dissList h4 {
		font-weight: 400;
		font-size: 18px;
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
		border-radius:50%;
	}
	
	.from p {
		margin-top: 15px;
		color: #bbb;
		font-size: 13px;
	}
</style>
