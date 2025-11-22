"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    userInfo: null,
    isLogin: false
  },
  mutations: {
    SET_USER(state, user) {
      state.userInfo = user;
    },
    SET_ISLOGIN(state, flag) {
      state.isLogin = flag;
    }
  },
  actions: {
    // async fetchUser({
    // 	commit
    // }, userId) {
    // 	try {
    // 		const user = await api.getUser(userId)
    // 		commit('SET_USER', user)
    // 	} catch (error) {
    // 		uni.__f__('error','at store/index.js:28','获取用户失败:', error)
    // 	}
    // },
  }
});
exports.store = store;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/index.js.map
