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
      list: [],
      id: 1,
      child: []
    });
    http_api_api.categories().then((res) => {
      console.log(res.message);
      data.list = res.message;
      data.child = res.message[0];
    });
    const highlight = (item) => {
      data.id = item.cat_id;
      data.child = item;
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      highlight
    });
  }
};
if (!Array) {
  const _easycom_header12 = common_vendor.resolveComponent("header1");
  _easycom_header12();
}
const _easycom_header1 = () => "../../components/header1/header1.js";
if (!Math) {
  _easycom_header1();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.o(($event) => $setup.highlight(item), item.cat_id),
        c: _ctx.id == item.cat_id ? 1 : "",
        d: item.cat_id
      };
    }),
    b: common_vendor.f(_ctx.child.children, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.f(item.children, (obj, k1, i1) => {
          return {
            a: obj.cat_icon,
            b: common_vendor.t(obj.cat_name),
            c: obj.cat_id
          };
        }),
        c: item.cat_id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/\u738B\u660E\u946B/Desktop/\u738B\u660E\u946Bp8-\u671F\u672B\u8003\u8BD5-A\u573A/yg-show/pages/cart/cart.vue"]]);
wx.createPage(MiniProgramPage);
