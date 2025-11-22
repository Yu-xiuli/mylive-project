<template>
	<view class="custom-navbar" :style="{height:`${navbarHeight+systemHeight}px`}">
		<view class="system-bar" :style="{height:`${systemHeight}px`}"></view>
		<view class="nav-bar" :style="{height:`${navbarHeight}px`}">
			<view class="navbar-item" v-if="isBack">
				<image :style="{height:`${systemRightButtonHeight}px`}" src="/static/back.png"
					mode="heightFix" @click="handleBack"></image>
			</view>
			<view class="navbar-item" v-if="!isBack"></view>
			<view class="[nav-title]">生活不在别处，在此处</view>
			<view class="navbar-item"></view>
		</view>
	</view>
</template>

<script setup>
	import {
		toRefs,
		ref
	} from 'vue'

	const props = defineProps({
		navbarHeight: Number,
		systemHeight: Number,
		systemRightButtonHeight: Number,
		isBack: Boolean
	})
	const {
		navbarHeight,
		systemHeight,
		systemRightButtonHeight,
		isBack
	} = toRefs(props)

	const handleBack = () => {
		uni.navigateBack()
	}
</script>

<style scoped>
	.custom-navbar {
		width: 100%;
		background-color: #A686BA;
		padding: 0;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.nav-bar {
		width: 100%;
		padding-left: 30rpx;
		display: flex;
		align-items: center;
	}

	.navbar-item {
		flex: 1;
	}

	.nav-title {
		width: auto;
		text-align: center;
		white-space: nowrap;
	}
</style>