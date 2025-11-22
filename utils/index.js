const cdn_baseurl = 'https://cdn.jsdelivr.net/gh/';
const repository_name = 'Yu-xiuli/mylive_images@main/images/';
// https://cdn.jsdelivr.net/gh/Yu-xiuli/mylive_images@main/images/cat/pet_mimi_1.jpg

export const getPicUrl = (picurl) => cdn_baseurl + repository_name + picurl;

export function getNavigationBarHeight() {
  const systemInfo = wx.getSystemInfoSync()
  const menuButtonInfo = wx.getMenuButtonBoundingClientRect()
  
  // 状态栏高度 (系统控制)
  const statusBarHeight = systemInfo.statusBarHeight
  
  // 导航栏高度 (小程序控制)
  // 计算公式: (胶囊按钮top - 状态栏高度) * 2 + 胶囊按钮高度
  const navigationBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height
  
  // 总高度 = 状态栏 + 导航栏
  // const totalHeight = statusBarHeight + navigationBarHeight
  
  return {
    // 系统区域
    statusBarHeight: statusBarHeight,           // 状态栏高度
    
    // 小程序区域  
    navigationBarHeight: navigationBarHeight,   // 导航栏高度
    menuButtonHeight: menuButtonInfo.height,    // 胶囊按钮高度
    // menuButtonTop: menuButtonInfo.top,          // 胶囊按钮top位置
    
    // 总占用高度
    // totalHeight: totalHeight,                   // 状态栏 + 导航栏
    
    // 其他信息
    // platform: systemInfo.platform,
    // screenWidth: systemInfo.screenWidth
  }
}