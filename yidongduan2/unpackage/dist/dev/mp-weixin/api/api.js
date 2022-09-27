"use strict";
var common_common_js_request = require("../common/common/js/request.js");
const swiper = async () => {
  let data = await common_common_js_request.api({
    url: "article/api/category/label/list",
    method: "get"
  });
  return data;
};
const list = async (item) => {
  let data = await common_common_js_request.api({
    url: "course/api/course/search",
    method: "POST",
    data: item
  });
  return data;
};
const list1 = async (item) => {
  let data = await common_common_js_request.api({
    url: "article/api/article/search",
    method: "POST",
    data: item
  });
  return data;
};
const hot = async (item) => {
  let data = await common_common_js_request.api({
    url: "question/api/question/hot",
    method: "POST",
    data: item
  });
  return data;
};
const new1 = async (item) => {
  let data = await common_common_js_request.api({
    url: "question/api/question/new",
    method: "POST",
    data: item
  });
  return data;
};
const wait = async (item) => {
  let data = await common_common_js_request.api({
    url: "question/api/question/wait",
    method: "POST",
    data: item
  });
  return data;
};
exports.hot = hot;
exports.list = list;
exports.list1 = list1;
exports.new1 = new1;
exports.swiper = swiper;
exports.wait = wait;
