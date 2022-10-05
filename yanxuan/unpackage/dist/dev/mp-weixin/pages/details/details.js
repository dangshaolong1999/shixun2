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
var http_api_api = require("../../http/api/api.js");
var common_vendor = require("../../common/vendor.js");
require("../../http/http.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      id: null,
      img: [],
      list: [],
      isCollect: false
    });
    common_vendor.onLoad((option) => {
      console.log(option.id);
      data.id = option.id;
      http_api_api.detail(data.id).then((res) => {
        console.log(res.message);
        data.img = res.message.pics;
        data.list = res.message;
      });
    });
    const handleCollect = () => {
      console.log(1);
      data.isCollect = !data.isCollect;
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      handleCollect
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
    f: _ctx.list.goods_introduce
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/asus/Desktop/\u4F5C\u4E1A/yanxuan/pages/details/details.vue"]]);
wx.createPage(MiniProgramPage);
