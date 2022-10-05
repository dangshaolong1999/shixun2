"use strict";
function debounce(fn, delay = 200) {
  let timeout = null;
  return function(...args) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    } else {
      fn.apply(this, args);
    }
    timeout = setTimeout(() => {
      console.log(args);
      fn.apply(this, args);
    }, delay);
  };
}
exports.debounce = debounce;
