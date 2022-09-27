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
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      list: [],
      id: 1,
      item: []
    });
    api_api.swiper().then((res) => {
      console.log(res.data);
      data.list = res.data;
      data.item = res.data[0];
    });
    const highlight = (item) => {
      data.id = item.id;
      data.item = item;
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      highlight
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.o(($event) => $setup.highlight(item), item.id),
        c: _ctx.id == item.id ? 1 : "",
        d: item.id
      };
    }),
    b: common_vendor.f(_ctx.item.labelList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: item.id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/\u738B\u660E\u946B/Desktop/\u738B\u660E\u946Bp8-\u671F\u672B\u8003\u8BD5-A\u573A/education-h5-app/pages/classification/classification.vue"]]);
wx.createPage(MiniProgramPage);
