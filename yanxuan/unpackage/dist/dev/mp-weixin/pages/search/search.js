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
var http_shake = require("../../http/shake.js");
require("../../http/http.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      inp: "",
      list: []
    });
    const search = http_shake.debounce(function() {
      http_api_api.qsearch(data.inp).then((res) => {
        console.log(res.message);
        data.list = res.message;
      });
    }, 500);
    const cancel = () => {
      data.list = [];
      data.inp = "";
    };
    const godetails = (id) => {
      console.log(id);
      common_vendor.index.navigateTo({
        url: `/pages/details/details?id=${id}`
      });
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      search,
      cancel,
      godetails
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o([($event) => _ctx.inp = $event.detail.value, (...args) => $setup.search && $setup.search(...args)]),
    b: _ctx.inp,
    c: common_vendor.o((...args) => $setup.cancel && $setup.cancel(...args)),
    d: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.goods_name),
        b: common_vendor.o(($event) => $setup.godetails(item.goods_id), item.goods_id),
        c: item.goods_id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/asus/Desktop/\u4F5C\u4E1A/yanxuan/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
