<template>
	<div>
		<!-- <Banner></Banner> -->
		<router-view></router-view>
		<!-- <FooterGuide></FooterGuide> -->
	</div>
</template>

<script>
	/* import FooterGuide from './pages/FooterGuide.vue' */
	export default {
		name: 'App',
		/* components:{FooterGuide} */
	}
</script>
<style>
	html,
	body,
	#app {
		height: 100%;
		width: 100%;
	}
</style>
