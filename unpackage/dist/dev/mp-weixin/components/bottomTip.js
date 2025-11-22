"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "bottomTip",
  props: {
    tips: { default: "到底啦" },
    customStyle: { default: {} }
  },
  setup(__props) {
    const { tips, customStyle } = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(tips),
        b: common_vendor.s(customStyle)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-51ee0197"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/bottomTip.js.map
