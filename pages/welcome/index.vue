<template>
	<view class="welcome-page">
		<view class="box">
			<view v-for="item in welInfo" :key="item">
				<text class="text-item">{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onBeforeUnmount,
		onMounted
	} from 'vue';
	// import {
	// 	navigateTo
	// } from '../../utils/navigate.ts'


	const welInfo = [
		// '美好不是一场需要盛装出席的盛宴，',
		// '而是一种专注的凝视。',
		// '当你愿意为一片云的形状驻足，',
		// '为一句寻常的关怀感动，',
		// '生活便会向你展现它最朴素也最珍贵的质地——',
		// '如同掌心里一块被体温捂暖的卵石，',
		// '不耀眼，却实在、恒久。',
		'欢',
		'迎'
	]

	let timer;

	onMounted(() => {
		timer = setTimeout(() => {
			uni.switchTab({
				url:'/pages/home/index'
			});
		}, 1000)
	})

	onBeforeUnmount(() => {
		if (timer) clearTimeout(timer);
	})
</script>

<style scoped>
	.welcome-page {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		background-color: #A686BA;
	}

	.box {
		width: fit-content;
		height: auto;
	}

	.text-item {
		height: 520rpx;
		display: block;
		line-height: 520rpx;
		font-size: 80rpx;
		font-family: cursive;
	}
</style>