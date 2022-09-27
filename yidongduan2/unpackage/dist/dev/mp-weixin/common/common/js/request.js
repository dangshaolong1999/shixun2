"use strict";
var common_vendor = require("../../vendor.js");
const api = (params) => {
  let URL = "http://m.mengxuegu.com/api/";
  return new Promise((resolve, reject) => {
    common_vendor.index.showLoading({
      title: "\u52A0\u8F7D\u4E2D"
    });
    common_vendor.index.request({
      url: URL + params.url,
      method: params.method || "GET",
      data: params.data || "",
      success: (res) => {
        common_vendor.index.hideLoading();
        resolve(res.data);
      }
    });
  });
};
exports.api = api;
