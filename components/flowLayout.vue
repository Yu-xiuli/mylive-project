<template>
	<view class="bottom-card">
		<view class="bottom-item" v-for="(item,idx) in list" :key="idx" @click="gotoDetail(item)">
			<image class="bottom-pic" :src="item.pic" mode="widthFix" lazy-load />
			<p class="bottom-text">{{item.desc}}</p>
		</view>
	</view>
</template>

<script setup>
	import {
		toRefs
	} from 'vue'

	const props = defineProps({
		list: Array
	})
	// 正确解构：使用 toRefs 保持响应性
	const {
		list
	} = toRefs(props)

	const gotoDetail = (info) => {
		if (info.pic && info.desc) {
			uni.navigateTo({
				url: `/pages/detail/index?params=${encodeURIComponent((JSON.stringify(info)))}`,
			})
		}
	}
</script>

<style scoped>
	.bottom-card {
		column-count: 2;
		gap: 8px;
	}

	.bottom-item {
		display: inline-block;
		width: 100%;
		margin-bottom: 8px;
		/* 防止断层 */
		break-inside: avoid;
		background: #ffffff;
		border-radius: 4px;
	}

	.bottom-pic {
		width: 100%;
	}

	.bottom-text {
		line-height: 30px;
		height: 38px;
		padding: 0 8px 8px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		color: #8c8c8c !important;
		font-size: 16px !important;
	}
</style>