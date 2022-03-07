<template>
	<div style="background-color:#ecf0f1;">
		<DissBanner></DissBanner>	
		<div class="main">
			<h1>给你看看我送出去的生日礼物吧~</h1>
			<img src="../../common/gift.jpg" />
			<p>
				一、禁止广告
				
				1.禁止微那个商及个人打着分享礼物的旗号打明广及暗广
				
				（包括发帖、评论暗戳戳明晃晃分享一看就是广告产品想让别人问你在哪买的，以及拿着明显模糊网图讨论xx不知名品牌东西怎么样好看吗是否值得买吗，以及分享个人手作实则是接单等行为）
				
				处理办法：违者删帖删评论封禁，火眼金睛的姐妹们如果发现了可以dd我（如果询问链接豆油发给你的是微那个商产品等也可以dd我）
				另外：组内不交易。注意甄别。
				上赶着给别人送钱俺也没话说，购物请选择有售后保障的正规厂家/店铺及平台
				2.求助讨论帖评论里禁止推荐微那个商以及个人手作以及非正规渠道的广告产品
				
				处理办法：违者删帖删评论封禁
				3.禁止水军以及任何形式的引流
				
				包括微信 公众号 小红书 助力 微博 拉群 奇怪二维码等（别引流了吧宝子们，组已经这么糊了，想方设法的让组员移步你别的社交软件真的太难看了）
				
				处理办法：违者删帖删评论封禁
				4.分享送出的礼物需要附上购买截图
				
				仅为了预防打广告
				
				处理办法：违者提醒锁帖，经提示不修改删除
			</p>
		</div>
		<div class="ad">
			<img src="../common/img/ad.png" />
		</div>
		<Drag></Drag>
		<DissFunc></DissFunc>
	</div>
</template>

<script>
	import DissBanner from '../../components/Banner.vue'
	import DissFunc from '../DissFunc.vue'
	import Drag from '../../components/Drag.vue'
	
	export default{
		name:'ReDetail',
		components: {
			DissBanner,
			DissFunc,
			Drag
		},
	}
</script>

<style>
</style>
