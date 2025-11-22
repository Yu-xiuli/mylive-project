<template>
	<view class="bottom-tip" :style="customStyle">--------{{ tips }}--------</view>
</template>

<script setup lang="ts">
	const { tips, customStyle } = withDefaults(
		defineProps<{ tips ?: string, customStyle ?: object }>(),
		{ tips: '到底啦', customStyle: { }}
	)
</script>

<style scoped>
	.bottom-tip {
		height: 80rpx;
		line-height: 80rpx;
		width: 100%;
		text-align: center;
		color: #8c8c8c !important;
	}
</style>