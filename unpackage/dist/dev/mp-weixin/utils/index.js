"use strict";
const common_vendor = require("../common/vendor.js");
function getNavigationBarHeight() {
  const systemInfo = common_vendor.wx$1.getSystemInfoSync();
  const menuButtonInfo = common_vendor.wx$1.getMenuButtonBoundingClientRect();
  const statusBarHeight = systemInfo.statusBarHeight;
  const navigationBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height;
  return {
    // 系统区域
    statusBarHeight,
    // 状态栏高度
    // 小程序区域  
    navigationBarHeight,
    // 导航栏高度
    menuButtonHeight: menuButtonInfo.height
    // 胶囊按钮高度
    // menuButtonTop: menuButtonInfo.top,          // 胶囊按钮top位置
    // 总占用高度
    // totalHeight: totalHeight,                   // 状态栏 + 导航栏
    // 其他信息
    // platform: systemInfo.platform,
    // screenWidth: systemInfo.screenWidth
  };
}
exports.getNavigationBarHeight = getNavigationBarHeight;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/index.js.map
