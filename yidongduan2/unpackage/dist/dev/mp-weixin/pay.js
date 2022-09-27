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
var api_api = require("./api/api.js");
var common_vendor = require("./common/vendor.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      list: [],
      page: 1,
      moer: false
    });
    api_api.list({ current: data.page, isFree: 0, size: 30 }).then((res) => {
      console.log(res.data.records);
      data.list = res.data.records;
    });
    window.onscroll = function() {
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.body.scrollHeight;
      let scrollTop = document.documentElement.scrollTop;
      if (data.list.length < 60)
        ;
      else {
        data.moer = true;
      }
      if (scrollTop + clientHeight >= scrollHeight) {
        api_api.list().then((res) => {
          if (data.list.length < 60) {
            data.list = [...data.list, ...res.data.records];
          }
        });
      }
    };
    return __spreadValues({}, common_vendor.toRefs(data));
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return {
        a: item.mainImage.slice(-3) == "jpg" ? `../../../static/${item.mainImage}` : item.mainImage,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.nickName),
        d: common_vendor.t(item.isFree == 1 ? "\u514D\u8D39" : item.priceDiscount),
        e: common_vendor.t(item.studyTotal),
        f: item.id
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/\u738B\u660E\u946B/Desktop/\u738B\u660E\u946Bp8-\u671F\u672B\u8003\u8BD5-A\u573A/education-h5-app/components/components/pay/pay.vue"]]);
exports.Component = Component;
