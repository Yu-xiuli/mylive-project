"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
if (!Math) {
  CustomNavbar();
}
const CustomNavbar = () => "../customNavbar.js";
const _sfc_main = {
  __name: "index",
  props: {
    isBack: Boolean
  },
  setup(__props) {
    const props = __props;
    const {
      isBack
    } = common_vendor.toRefs(props);
    let navbarHeight = common_vendor.ref(45);
    let systemHeight = common_vendor.ref(40);
    let systemButtonHeight = common_vendor.ref(40);
    common_vendor.onLoad(() => {
      const {
        statusBarHeight,
        navigationBarHeight,
        menuButtonHeight
      } = utils_index.getNavigationBarHeight();
      if (statusBarHeight || navigationBarHeight || menuButtonHeight) {
        navbarHeight.value = navigationBarHeight;
        systemHeight.value = statusBarHeight;
        systemButtonHeight.value = menuButtonHeight;
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          navbarHeight: common_vendor.unref(navbarHeight),
          systemHeight: common_vendor.unref(systemHeight),
          systemRightButtonHeight: common_vendor.unref(systemButtonHeight),
          isBack: common_vendor.unref(isBack)
        }),
        b: `${common_vendor.unref(navbarHeight) + common_vendor.unref(systemHeight)}px`
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e6341666"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/pageLayout/index.js.map
