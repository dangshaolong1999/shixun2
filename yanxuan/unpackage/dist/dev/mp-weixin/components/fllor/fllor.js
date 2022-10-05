"use strict";
var __defProp = Object.defineProperty;
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
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["list"],
  setup() {
    const data = common_vendor.reactive({});
    return __spreadValues({}, common_vendor.toRefs(data));
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: item.floor_title.image_src,
        b: common_vendor.f(item.product_list.slice(0, 1), (obj, index2, i1) => {
          return {
            a: obj.image_src,
            b: index2
          };
        }),
        c: common_vendor.f(item.product_list.slice(1, 5), (obj, index2, i1) => {
          return {
            a: obj.image_src,
            b: index2
          };
        }),
        d: index
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/asus/Desktop/\u4F5C\u4E1A/yanxuan/components/fllor/fllor.vue"]]);
wx.createComponent(Component);
