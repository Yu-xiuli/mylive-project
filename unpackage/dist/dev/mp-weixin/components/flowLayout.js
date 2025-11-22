"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  __name: "flowLayout",
  props: {
    list: Array
  },
  setup(__props) {
    const props = __props;
    const {
      list
    } = common_vendor.toRefs(props);
    const gotoDetail = (info) => {
      if (info.pic && info.desc) {
        common_vendor.index.navigateTo({
          url: `/pages/detail/index?params=${encodeURIComponent(JSON.stringify(info))}`
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list), (item, idx, i0) => {
          return {
            a: item.pic,
            b: common_vendor.t(item.desc),
            c: idx,
            d: common_vendor.o(($event) => gotoDetail(item), idx)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-02b7ef6a"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/flowLayout.js.map
