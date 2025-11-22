"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  __name: "customNavbar",
  props: {
    navbarHeight: Number,
    systemHeight: Number,
    systemRightButtonHeight: Number,
    isBack: Boolean
  },
  setup(__props) {
    const props = __props;
    const {
      navbarHeight,
      systemHeight,
      systemRightButtonHeight,
      isBack
    } = common_vendor.toRefs(props);
    const handleBack = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: `${common_vendor.unref(systemHeight)}px`,
        b: common_vendor.unref(isBack)
      }, common_vendor.unref(isBack) ? {
        c: `${common_vendor.unref(systemRightButtonHeight)}px`,
        d: common_assets._imports_0$1,
        e: common_vendor.o(handleBack)
      } : {}, {
        f: !common_vendor.unref(isBack)
      }, !common_vendor.unref(isBack) ? {} : {}, {
        g: `${common_vendor.unref(navbarHeight)}px`,
        h: `${common_vendor.unref(navbarHeight) + common_vendor.unref(systemHeight)}px`
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-94978aba"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/customNavbar.js.map
