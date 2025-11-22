<template>
	<view class="my-page">
		<!-- 顶部用户信息 -->
		<view class="my-top-content">
			<view class="user-info">
				<!-- userInfo?.avatarUrl -->
				<image class="user-img" src="/static/touxiang.png" mode=""></image>
				<view class="user-name" @click="handlelogin">
					<!-- userInfo?.nickName|| -->
					登录
				</view>
			</view>
		</view>

		<!-- 下边的 反馈、关于、注销账号 -->
		<view class="my-bottom-content">
			<view class="handle-item" @click="handleFeedback">反馈</view>
			<view class="handle-item" @click="gotoIntroduce">关于</view>
			<view class="handle-item" @click="delCount">注销账号</view>
		</view>
	</view>
</template>

<script setup>
	// import {
	// 	useStore
	// } from 'vuex'
	// import {
	// 	computed
	// } from 'vue'
	// import {
	// 	onLoad,
	// 	onShow,
	// 	onHide
	// } from '@dcloudio/uni-app'

	// const store = useStore()
	// 访问 state
	// const isLogin = computed(() => store.state.isLogin)
	// const userInfo = computed(() => store.state.userInfo)
	// 调用 mutations
	// store.commit('SET_USER', '用户信息')
	// // 调用 actions
	// store.dispatch('fetchUser', {
	// 	id: Date.now(),
	// 	text: '新任务'
	// })

	// onLoad(() => {
	// 	console.log(userInfo.value, isLogin.value, 'kkk----onload')
	// })

	// onShow(() => {
	// 	console.log(userInfo.value, isLogin.value, 'onShow')
	// })

	// onHide(() => {
	// 	console.log(userInfo.value, isLogin.value, 'onHide')
	// })

	// const getUserProfile = async () => {
	// 	try {
	// 		const userProfile = await new Promise((resolve, reject) => {
	// 			uni.getUserProfile({
	// 				desc: '用于完善用户资料',
	// 				success: resolve,
	// 				fail: reject
	// 			})
	// 		})
	// 		const {
	// 			nickName,
	// 			avatarUrl
	// 		} = userProfile?.userInfo
	// 		if (nickName || avatarUrl) {
	// 			store.commit('SET_USER', {
	// 				nickName,
	// 				avatarUrl
	// 			})
	// 			store.commit('SET_ISLOGIN', true)
	// 		}
	// 	} catch (error) {
	// 		uni.showToast({
	// 			title: '登录失败，请稍后再试',
	// 			duration: 1000
	// 		})
	// 	}
	// }

	const handlelogin = () => {
		uni.showToast({
			title: '功能开发中，敬请期待',
			icon: 'none',
			duration: 1000
		})
	}


	// 反馈
	const handleFeedback = () => {
		uni.showToast({
			title: '功能开发中，敬请期待',
			icon: 'none',
			duration: 1000
		})
		// if (isLogin.value) {
		// 	console.log('我要反馈')
		// } else {
		// 	uni.showModal({
		// 		title: '友情提示：',
		// 		content: '您还未登录呐~ 登录之后才能操作呦~',
		// 		cancelText: '我再想想',
		// 		confirmText: '去登录',
		// 		success: (res) => {
		// 			if (res.confirm) {
		// 				getUserProfile()
		// 			}
		// 		}
		// 	})
		// }
	}

	// 关于
	const gotoIntroduce = () => {
		// console.log('关于')
		uni.showToast({
			title: '功能开发中，敬请期待',
			icon: 'none',
			duration: 1000
		})
	}

	// 注销
	const delCount = () => {
		// console.log('注销')
		uni.showToast({
			title: '功能开发中，敬请期待',
			icon: 'none',
			duration: 1000
		})
	}
</script>

<style scoped>
	.my-page {
		width: 100vw;
		height: 100vh;
	}

	.my-top-content {
		position: relative;
		height: 30%;
		width: 100%;
		background-color: #A686BA;
	}

	.user-info {
		width: 100%;
		height: 170rpx;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.user-img {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.user-name {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
		padding: 8rpx 16rpx;
		text-align: center;
		font-size: 18px;
		color: #383838;
	}

	.my-bottom-content {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.handle-item {
		height: 34px;
		line-height: 34px;
		width: 100%;
		border-bottom: 1px solid #8d8d8d;
		font-size: 18px;
		color: #8d8d8d;
		padding-left: 10px;
	}
</style>