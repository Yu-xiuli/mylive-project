"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const handlelogin = () => {
      common_vendor.index.showToast({
        title: "功能开发中，敬请期待",
        icon: "none",
        duration: 1e3
      });
    };
    const handleFeedback = () => {
      common_vendor.index.showToast({
        title: "功能开发中，敬请期待",
        icon: "none",
        duration: 1e3
      });
    };
    const gotoIntroduce = () => {
      common_vendor.index.showToast({
        title: "功能开发中，敬请期待",
        icon: "none",
        duration: 1e3
      });
    };
    const delCount = () => {
      common_vendor.index.showToast({
        title: "功能开发中，敬请期待",
        icon: "none",
        duration: 1e3
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.o(handlelogin),
        c: common_vendor.o(handleFeedback),
        d: common_vendor.o(gotoIntroduce),
        e: common_vendor.o(delCount)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-355196c2"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/userconf/index.js.map
