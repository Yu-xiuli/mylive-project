"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_template = common_vendor.resolveComponent("template");
  _component_template();
}
if (!Math) {
  (BottomTip + FlowLayout + PageLayout)();
}
const BottomTip = () => "../../components/bottomTip.js";
const PageLayout = () => "../../components/pageLayout/index.js";
const FlowLayout = () => "../../components/flowLayout.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const tipstyle = common_vendor.ref({
      height: "50px",
      lineHeight: "50px"
    });
    const bannerList = common_vendor.ref([
      "/static/travel/5.jpg",
      "/static/travel/travel_4.jpg",
      "/static/dog/pet_dumpling_7.jpg",
      "/static/cat/pet_mimi_7.jpg",
      "/static/dog/pet_dumpling_2.jpg"
    ]);
    const cardList = common_vendor.ref([
      {
        title: "去看看喵主子",
        icon: "/static/gotocat.jpg",
        path: "/pages/pets/index",
        key: "cat"
      },
      {
        title: "围观狗子日常",
        icon: "/static/gotodog.jpg",
        path: "/pages/pets/index",
        key: "dog"
      },
      {
        title: "世界那么大，我想去看看",
        icon: "/static/gototravel.jpg",
        path: "/pages/travel/index",
        key: "travel"
      }
    ]);
    const liveList = common_vendor.ref([
      {
        pic: "/static/live/live_1.jpg",
        desc: "小熊爆改鸡哥——我就站在你面前，你看我几分像从前。",
        diretion: "column"
      },
      {
        pic: "/static/live/live_6.jpg",
        desc: "下班时的晚霞",
        diretion: "row"
      },
      {
        pic: "/static/live/live_4.jpg",
        desc: "这是送张先生的礼物——由两千多个碎片组成的遥控赛车。当然是他自己拼的啦~是谁想玩我不说。",
        diretion: "row"
      },
      {
        pic: "/static/live/live_2.jpg",
        desc: "kitty爷爷~完成后就盖起来了。。。。。。",
        diretion: "column"
      },
      {
        pic: "/static/live/gouzhi.jpg",
        desc: "每次逛街都会碰见卖手工制品的摊子，碰见的多了总想自己试试，于是买了些原材料，按照教程去一步步做。起初是一小捧花束，后来渐渐的就可以做自己想做的东西了。这是根据我喜欢的杯子的大小定制的杯套，我十分喜欢。",
        diretion: "row"
      },
      {
        pic: "/static/live/huashu.jpg",
        desc: "这是跟朋友逛街时她送的手捧花，还真别说，怪好看的。",
        diretion: "row"
      },
      {
        pic: "/static/live/meishi.jpg",
        desc: "张先生尤爱做饭，说是享受自给自足的过程。我着实得益于他的爱好，想吃的菜只要报个名字即可，在此悄悄的比个心🤞",
        diretion: "row"
      },
      {
        pic: "/static/live/xueren.jpg",
        desc: "不知道为什么每年下雪都很兴奋，这是小区里的绿化上的积雪，不堆个雪人总觉得少了什么。",
        diretion: "row"
      },
      {
        pic: "/static/live/youxi.jpg",
        desc: "生活是丰富多彩的，除了工作学习，娱乐也是不可或缺的一部分。工作闲暇之余我也会玩不同的游戏,工作时好好工作，其余时间也要好好生活，过的开心呀。",
        diretion: "row"
      }
    ]);
    const handleCardClick = (card) => {
      if (card.path && card.key) {
        common_vendor.index.setStorageSync("petTabKey", {
          key: card.key
        });
        common_vendor.index.switchTab({
          url: card.path
        });
      } else {
        common_vendor.index.showToast({
          title: "功能开发中",
          icon: "none",
          duration: 1e3
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(bannerList.value, (pic, index, i0) => {
          return {
            a: pic,
            b: index
          };
        }),
        b: cardList.value[0].icon,
        c: common_vendor.o(($event) => handleCardClick(cardList.value[0])),
        d: cardList.value[1].icon,
        e: common_vendor.o(($event) => handleCardClick(cardList.value[1])),
        f: cardList.value[2].icon,
        g: common_vendor.o(($event) => handleCardClick(cardList.value[2])),
        h: common_vendor.p({
          tips: "碎碎念",
          customStyle: tipstyle.value
        }),
        i: common_vendor.p({
          list: liveList.value
        }),
        j: common_vendor.p({
          isBack: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4978fed5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/index.js.map
