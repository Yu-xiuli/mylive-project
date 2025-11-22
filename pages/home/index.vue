<template>
	<PageLayout :isBack="false">
		<template class="container">
			<!-- 上部：轮播图 -->
			<view class="top-section">
				<swiper class="swiper" :autoplay="true" :interval="3000" :duration="500" :circular="true" indicator-dots
					indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#ffffff">
					<swiper-item v-for="(pic, index) in bannerList" :key="index">
						<image class="swiper-image" :src="pic" mode="widthFix" />
					</swiper-item>
				</swiper>
			</view>

			<!-- 中部：路由卡片 -->
			<view class="center-section">
				<view class="cards-left">
					<image class="card-item" :src="cardList[0].icon" mode="widthFix"
						@click="handleCardClick(cardList[0])" />
					<image class="card-item" :src="cardList[1].icon" mode="widthFix"
						@click="handleCardClick(cardList[1])" />
				</view>
				<view class="card-right">
					<image class="card-item" :src="cardList[2].icon" mode="widthFix"
						@click="handleCardClick(cardList[2])" />
				</view>
			</view>

			<view class="bottom-content">
				<BottomTip tips="碎碎念" :customStyle=" tipstyle " />
				<FlowLayout :list="liveList" />
				<BottomTip />
			</view>
		</template>
	</PageLayout>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	// import {
	// 	getPicUrl
	// } from '@/utils/index.js'
	import BottomTip from '@/components/bottomTip.vue'
	import CustomNavbar from '@/components/customNavbar.vue'
	import PageLayout from '@/components/pageLayout/index.vue'
	import FlowLayout from '@/components/flowLayout.vue'

	const tipstyle = ref({
		height: '50px',
		lineHeight: '50px'
	})
	// 轮播图数据
	const bannerList = ref([
		'/static/travel/5.jpg',
		'/static/travel/travel_4.jpg',
		'/static/dog/pet_dumpling_7.jpg',
		'/static/cat/pet_mimi_7.jpg',
		'/static/dog/pet_dumpling_2.jpg'
	])

	// 卡片数据
	const cardList = ref([{
			title: '去看看喵主子',
			icon: '/static/gotocat.jpg',
			path: '/pages/pets/index',
			key: 'cat'
		},
		{
			title: '围观狗子日常',
			icon: '/static/gotodog.jpg',
			path: '/pages/pets/index',
			key: 'dog'
		},
		{
			title: '世界那么大，我想去看看',
			icon: '/static/gototravel.jpg',
			path: '/pages/travel/index',
			key: 'travel'
		}
	])

	const liveList = ref([{
			pic: '/static/live/live_1.jpg',
			desc: '小熊爆改鸡哥——我就站在你面前，你看我几分像从前。',
			diretion: 'column'
		},
		{
			pic: '/static/live/live_6.jpg',
			desc: '下班时的晚霞',
			diretion: 'row'
		},
		{
			pic: '/static/live/live_4.jpg',
			desc: '这是送张先生的礼物——由两千多个碎片组成的遥控赛车。当然是他自己拼的啦~是谁想玩我不说。',
			diretion: 'row'
		},
		{
			pic: '/static/live/live_2.jpg',
			desc: 'kitty爷爷~完成后就盖起来了。。。。。。',
			diretion: 'column'
		},
		{
			pic: '/static/live/gouzhi.jpg',
			desc: '每次逛街都会碰见卖手工制品的摊子，碰见的多了总想自己试试，于是买了些原材料，按照教程去一步步做。起初是一小捧花束，后来渐渐的就可以做自己想做的东西了。这是根据我喜欢的杯子的大小定制的杯套，我十分喜欢。',
			diretion: 'row'
		},
		{
			pic: '/static/live/huashu.jpg',
			desc:'这是跟朋友逛街时她送的手捧花，还真别说，怪好看的。',
			diretion: 'row'
		},
		{
			pic: '/static/live/meishi.jpg',
			desc:'张先生尤爱做饭，说是享受自给自足的过程。我着实得益于他的爱好，想吃的菜只要报个名字即可，在此悄悄的比个心🤞',
			diretion: 'row'
		},
		{
			pic: '/static/live/xueren.jpg',
			desc:'不知道为什么每年下雪都很兴奋，这是小区里的绿化上的积雪，不堆个雪人总觉得少了什么。',
			diretion: 'row'
		},
		{
			pic: '/static/live/youxi.jpg',
			desc:'生活是丰富多彩的，除了工作学习，娱乐也是不可或缺的一部分。工作闲暇之余我也会玩不同的游戏,工作时好好工作，其余时间也要好好生活，过的开心呀。',
			diretion: 'row'
		}
	])
 
	// 卡片点击事件
	const handleCardClick = (card) => {
		if (card.path && card.key) {
			uni.setStorageSync('petTabKey', {
				key: card.key
			})
			uni.switchTab({
				url: card.path
			})
		} else {
			uni.showToast({
				title: '功能开发中',
				icon: 'none',
				duration: 1000
			})
		}
	}

	const gotoDetail = (info) => {
		if (info.pic && info.desc) {
			uni.navigateTo({
				url: `/pages/detail/index?params=${encodeURIComponent((JSON.stringify(info)))}`,
			})
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		height: 100%;
		padding: 0 8px;
		background-color: #f5f5f5;
	}

	.top-section {
		width: 100%;
		height: fit-content;
		border-radius: 4px;
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.swiper {
		width: 100%;
	}

	.swiper-image {
		width: 100%;
	}

	.center-section {
		display: flex;
		margin-top: 10px;
		gap: 8px;
	}

	.card-right {
		flex: 1;

		.card-item {
			width: 100%;
		}
	}

	.cards-left {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 8px;

		.card-item {
			flex: 1;
			width: 100%;
		}
	}

	.card-item {
		border-radius: 6px;
		// transition: all 0.3s ease;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		background-size: cover;
		background-position: center;
		cursor: pointer;
	}

	.bottom-content {
		height: fit-content;

		// .bottom-title,
		// .bottom-tip {
		// 	height: 30px;
		// 	width: 100%;
		// 	padding: 8px;
		// 	text-align: center;
		// 	line-height: 30px;
		// 	color: #8c8c8c !important;
		// }

		.bottom-card {
			column-count: 2;
			gap: 8px;

			.bottom-item {
				display: inline-block;
				width: 100%;
				margin-bottom: 8px;
				/* 防止断层 */
				break-inside: avoid;
				background: #ffffff;
				border-radius: 4px;

				.bottom-pic {
					width: 100%;
				}

				.bottom-text {
					padding: 6px;
					line-height: 16px;
					height: 16px;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					color: #8c8c8c !important;
					font-size: 16px !important;
				}
			}
		}
	}
</style>