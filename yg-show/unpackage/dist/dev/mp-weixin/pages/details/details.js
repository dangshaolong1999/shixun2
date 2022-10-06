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
var common_vendor = require("../../common/vendor.js");
var http_api_api = require("../../http/api/api.js");
require("../../http/http.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      id: "0",
      img: [],
      list: {},
      isCollect: false,
      info: []
    });
    common_vendor.onLoad((option) => {
      console.log(option.id);
      data.id = option.id;
      http_api_api.detail(data.id).then((res) => {
        data.img = res.message.pics;
        data.list = res.message;
      });
    });
    const handleCollect = () => {
      data.isCollect = !data.isCollect;
    };
    const handleCartAdd = () => {
      data.info = common_vendor.index.getStorageSync("info") || [];
      console.log(data.info);
      let index = data.info.findIndex((item) => item.goods_id == data.list.goods_id);
      console.log(index);
      if (index == -1) {
        data.list.num = 1;
        data.list.checked = false;
        data.info.push(data.list);
      } else {
        data.info[index].num++;
      }
      common_vendor.index.setStorage({
        key: "info",
        data: data.info
      });
      common_vendor.index.showToast({
        title: "\u52A0\u5165\u6210\u529F",
        icon: "success"
      });
    };
    const handleCartTiao = () => {
      common_vendor.index.reLaunch({
        url: "../shopping/shopping"
      });
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      handleCollect,
      handleCartAdd,
      handleCartTiao
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.img, (item, index, i0) => {
      return {
        a: item.pics_mid,
        b: index
      };
    }),
    b: common_vendor.t(_ctx.list.goods_price),
    c: common_vendor.t(_ctx.list.goods_name),
    d: common_vendor.t(_ctx.list.goods_name),
    e: common_vendor.o((...args) => $setup.handleCollect && $setup.handleCollect(...args)),
    f: _ctx.list.goods_introduce,
    g: common_vendor.o((...args) => $setup.handleCartTiao && $setup.handleCartTiao(...args)),
    h: common_vendor.o((...args) => $setup.handleCartAdd && $setup.handleCartAdd(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/\u738B\u660E\u946B/Desktop/\u738B\u660E\u946Bp8-\u671F\u672B\u8003\u8BD5-A\u573A/yg-show/pages/details/details.vue"]]);
wx.createPage(MiniProgramPage);
