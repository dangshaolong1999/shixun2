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
var common_vendor = require("./common/vendor.js");
const _sfc_main = {
  props: ["scrollTop"],
  setup(props, tcx) {
    const data = common_vendor.reactive({});
    const backtop = () => {
      let a = document.documentElement.scrollTop;
      let timer = setInterval(() => {
        if (a > 0) {
          a -= 100;
          window.scrollTo(0, a);
        } else {
          clearInterval(timer);
        }
      }, 10);
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      backtop
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.backtop && $setup.backtop(...args)),
    b: $props.scrollTop >= 800
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/\u738B\u660E\u946B/Desktop/\u738B\u660E\u946Bp8-\u671F\u672B\u8003\u8BD5-A\u573A/education-h5-app/components/components/Back-top/Back-top.vue"]]);
exports.Component = Component;
