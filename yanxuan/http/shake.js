// export const debounce = (func, time, ctx, immediate) => {
//   let timer;
//   const rtn = (...params) => {
//     clearTimeout(timer);
//     if (immediate) {
//       let callNow = !timer;
//       timer = setTimeout(() => {
//         timer = null;
//       }, time);
//       if (callNow) func.apply(ctx, params);
//     } else {
//       timer = setTimeout(() => {
//         func.apply(ctx, params);
//       }, time);
//     }
//   };
//   return rtn;
// };

export function debounce(fn,delay = 200){
        let timeout = null;
        return function(...args){
            if(timeout){
                clearTimeout(timeout)
                timeout = null
            }else{
                fn.apply(this,args)
            }
            timeout = setTimeout(() => {
                console.log(args);
                fn.apply(this,args)
            },delay)
        }
    }