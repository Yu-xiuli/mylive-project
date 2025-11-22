import {
	createStore
} from 'vuex'

export default createStore({
	state: {
		userInfo: null,
		isLogin: false
	},

	mutations: {
		SET_USER(state, user) {
			state.userInfo = user
		},
		SET_ISLOGIN(state, flag) {
			state.isLogin = flag
		},
	},

	actions: {
		// async fetchUser({
		// 	commit
		// }, userId) {
		// 	try {
		// 		const user = await api.getUser(userId)
		// 		commit('SET_USER', user)
		// 	} catch (error) {
		// 		console.error('获取用户失败:', error)
		// 	}
		// },
	}
})