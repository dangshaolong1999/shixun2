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
const myinput = () => "../../components/components/head-search/head-search2.js";
const _sfc_main = {
  components: {
    myinput,
    Back
  },
  setup() {
    const data = common_vendor.reactive({
      clock: "#345dc2",
      list: [],
      id: 0,
      scrollTop: 0
    });
    const highlight = (i) => {
      data.id = i;
      if (i == 0) {
        api_api.hot({ current: 1, size: 10 }).then((res) => {
          data.list = res.data.records;
        });
      } else if (i == 1) {
        api_api.new1({ current: 1, size: 10 }).then((res) => {
          data.list = res.data.records;
        });
      } else {
        api_api.wait({ current: 1, size: 10 }).then((res) => {
          data.list = res.data.records;
        });
      }
    };
    api_api.hot({ current: 1, size: 10 }).then((res) => {
      console.log(res);
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
        api_api.hot({
          current: 1,
          size: 10
        }).then((res) => {
          if (data.list.length < 60) {
            data.list = [...data.list, ...res.data.records];
          }
        });
      }
    };
    common_vendor.onPageScroll((e) => {
      data.scrollTop = e.scrollTop;
    });
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      highlight
    });
  }
};
if (!Array) {
  const _component_myinput = common_vendor.resolveComponent("myinput");
  const _component_Back = common_vendor.resolveComponent("Back");
  (_component_myinput + _component_Back)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      clock: _ctx.clock
    }),
    b: common_vendor.p({
      scrollTop: _ctx.scrollTop
    }),
    c: common_vendor.o(($event) => $setup.highlight(0)),
    d: _ctx.id == 0 ? 1 : "",
    e: common_vendor.o(($event) => $setup.highlight(1)),
    f: _ctx.id == 1 ? 1 : "",
    g: common_vendor.o(($event) => $setup.highlight(2)),
    h: _ctx.id == 2 ? 1 : "",
    i: common_vendor.f(_ctx.list, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.reply),
        c: common_vendor.t(item.viewCount),
        d: common_vendor.t(item.nickName),
        e: common_vendor.t(item.createDate),
        f: item.id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/\u738B\u660E\u946B/Desktop/\u738B\u660E\u946Bp8-\u671F\u672B\u8003\u8BD5-A\u573A/education-h5-app/pages/qa/qa.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
