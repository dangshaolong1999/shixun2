"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var api_api = require("../../api/api.js");
var common_vendor = require("../../common/vendor.js");
require("../../common/common/js/request.js");
const Back = () => "../../components/components/Back-top/Back-top2.js";
const pay = () => "../../components/components/pay/pay2.js";
const released = () => "../../components/components/released/released2.js";
const HotList = () => "../../components/components/HotList/HotList2.js";
const myinput = () => "../../components/components/head-search/head-search2.js";
const _sfc_main = {
  components: {
    myinput,
    HotList,
    released,
    pay,
    Back
  },
  setup() {
    const data = common_vendor.reactive({
      src: [
        {
          img: "../../static/static/images/banner1.jpg",
          bgc: "linear-gradient(to top, #fff 0%, #3a2e5e 100%)"
        },
        {
          img: "../../static/static/images/banner2.jpg",
          bgc: "linear-gradient(to top, #fff 0%, #68ba0f 100%)"
        },
        {
          img: "../../static/static/images/banner3.jpg",
          bgc: "linear-gradient(to top, #fff 0%, #0f6ab4 100%)"
        }
      ],
      clock: "#345dc2",
      fication: [],
      scrollTop: 0,
      Hottitle: "\u70ED\u95E8\u63A8\u8350",
      Hotlist: [],
      Mtitle: "\u514D\u8D39\u7CBE\u9009",
      mlist: [],
      eid: 0
    });
    api_api.list({
      current: 1,
      size: 10,
      sort: "hot"
    }).then((res) => {
      console.log(res.data.records);
      data.Hotlist = res.data.records;
    });
    api_api.list({
      current: 2,
      size: 6,
      isFree: 1
    }).then((res) => {
      console.log(res.data.records);
      data.mlist = res.data.records;
    });
    common_vendor.onPageScroll((e) => {
      data.scrollTop = e.scrollTop;
      if (data.scrollTop > 30) {
        data.clock = "#345dc2";
      } else {
        if (data.eid == 0) {
          data.clock = "#45328c";
        } else if (data.eid == 1) {
          data.clock = "#006C00";
        } else {
          data.clock = "#0072B7";
        }
      }
    });
    api_api.swiper().then((res) => {
      console.log(res.data);
      data.fication = res.data;
    });
    const img = (e) => {
      data.eid = e.detail.current;
      if (data.scrollTop > 30) {
        data.clock = "#345dc2";
      } else {
        if (e.detail.current == 0) {
          data.clock = "#3a2e5e";
        } else if (e.detail.current == 1) {
          data.clock = "#68ba0f";
        } else {
          data.clock = "#0f6ab4";
        }
      }
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      img
    });
  }
};
if (!Array) {
  const _component_myinput = common_vendor.resolveComponent("myinput");
  const _component_HotList = common_vendor.resolveComponent("HotList");
  const _component_released = common_vendor.resolveComponent("released");
  const _component_pay = common_vendor.resolveComponent("pay");
  const _component_Back = common_vendor.resolveComponent("Back");
  (_component_myinput + _component_HotList + _component_released + _component_pay + _component_Back)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      clock: _ctx.clock
    }),
    b: common_vendor.f(_ctx.src, (item, index, i0) => {
      return {
        a: item.img,
        b: index,
        c: common_vendor.s(`background:${item.bgc}`)
      };
    }),
    c: common_vendor.o((...args) => $setup.img && $setup.img(...args)),
    d: common_vendor.f(_ctx.fication, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id < 8
      };
    }),
    e: common_vendor.p({
      title: _ctx.Hottitle,
      list: _ctx.Hotlist
    }),
    f: common_vendor.p({
      title: _ctx.Mtitle,
      list: _ctx.Hotlist
    }),
    g: common_vendor.p({
      scrollTop: _ctx.scrollTop
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/\u738B\u660E\u946B/Desktop/\u738B\u660E\u946Bp8-\u671F\u672B\u8003\u8BD5-A\u573A/education-h5-app/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
