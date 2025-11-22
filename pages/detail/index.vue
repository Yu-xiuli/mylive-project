<template>
	<PageLayout :isBack="true">
		<template>
			<view class="detail-pic-box">
				<image class="detail-pic" :src="pageParams.pic" mode="widthFix" />
			</view>
			<view class="detail-desc">
				{{pageParams.desc}}
			</view>
		</template>
	</PageLayout>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		ref
	} from 'vue'
	import PageLayout from '@/components/pageLayout/index.vue'

	const pageParams = ref({})

	onLoad((options) => {
		const params = JSON.parse(decodeURIComponent(options.params));
		pageParams.value = params
	})

	const handleBack = () => {
		uni.switchTab({
			url: '/pages/home/index'
		})
	}
</script>

<style scoped>
	.detail-pic-box {
		width: 100%;
	}

	.detail-pic {
		width: 100% !important;
	}

	.detail-desc {
		width: 100%;
		padding-bottom: 30rpx;
	}
</style>