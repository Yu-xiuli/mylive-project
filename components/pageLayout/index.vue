<template>
	<view class="pages-layout">
		<CustomNavbar :navbarHeight="navbarHeight" :systemHeight="systemHeight"
			:systemRightButtonHeight="systemButtonHeight" :isBack="isBack" />
		<view class="page-wrapper" :style="{paddingTop:`${navbarHeight+systemHeight}px` }">
			<!-- minHeight: `calc(100vh - ${navbarHeight}px)`} -->
			<slot></slot>
		</view>
	</view>
</template>

<script setup>
	import CustomNavbar from '../customNavbar.vue'
	import {
		ref,
		onMounted,
		toRefs
	} from 'vue'
	import {
		getNavigationBarHeight
	} from '@/utils/index.js'
	import {
		onLoad
	} from '@dcloudio/uni-app'

	const props = defineProps({
		isBack: Boolean
	})
	const {
		isBack
	} = toRefs(props)

	let navbarHeight = ref(45);
	let systemHeight = ref(40);
	let systemButtonHeight = ref(40);

	onLoad(() => {
		const {
			statusBarHeight,
			navigationBarHeight,
			menuButtonHeight
		} = getNavigationBarHeight();

		if (statusBarHeight || navigationBarHeight || menuButtonHeight) {
			navbarHeight.value = navigationBarHeight
			systemHeight.value = statusBarHeight
			systemButtonHeight.value = menuButtonHeight
		}
	})
</script>

<style scoped>
	.pages-layout {
		width: 100%;
		height: 100vh;
		overflow: hidden auto;
		/* padding-bottom: 12px; */
		padding-left: 20rpx;
		padding-right: 20rpx;
		background-color: #f7f7f7;
		display: flex;
		flex-direction: column;
	}

	.page-wrapper {
		flex: 1;
		min-height: 100%;
	}
</style>