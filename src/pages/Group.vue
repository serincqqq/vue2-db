<template>
	<div>
		<Banner></Banner>
		<GroupHead></GroupHead>
		<GroupMain></GroupMain>
		<FooterGuide></FooterGuide>
	</div>
</template>

<script>
	import Banner from '../components/Banner.vue'
	import GroupHead from '../components/GroupHead.vue'
	import GroupMain from '../components/GroupMain.vue'
	import FooterGuide from './FooterGuide.vue'
	export default {
		name: 'group',
		components: {
			Banner,
			GroupHead,
			GroupMain,
			FooterGuide
		}
	}
</script>

<style>

</style>
