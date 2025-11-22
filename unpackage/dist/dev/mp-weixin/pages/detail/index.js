"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_template = common_vendor.resolveComponent("template");
  _component_template();
}
if (!Math) {
  PageLayout();
}
const PageLayout = () => "../../components/pageLayout/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const pageParams = common_vendor.ref({});
    common_vendor.onLoad((options) => {
      const params = JSON.parse(decodeURIComponent(options.params));
      pageParams.value = params;
    });
    return (_ctx, _cache) => {
      return {
        a: pageParams.value.pic,
        b: common_vendor.t(pageParams.value.desc),
        c: common_vendor.p({
          isBack: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2fd5b0a7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/index.js.map
