"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const welInfo = [
      // '美好不是一场需要盛装出席的盛宴，',
      // '而是一种专注的凝视。',
      // '当你愿意为一片云的形状驻足，',
      // '为一句寻常的关怀感动，',
      // '生活便会向你展现它最朴素也最珍贵的质地——',
      // '如同掌心里一块被体温捂暖的卵石，',
      // '不耀眼，却实在、恒久。',
      "欢",
      "迎"
    ];
    let timer;
    common_vendor.onMounted(() => {
      timer = setTimeout(() => {
        common_vendor.index.switchTab({
          url: "/pages/home/index"
        });
      }, 1e3);
    });
    common_vendor.onBeforeUnmount(() => {
      if (timer)
        clearTimeout(timer);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(welInfo, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-93d46b61"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/welcome/index.js.map
