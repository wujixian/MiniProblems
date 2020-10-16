// 导出函数方式一
// const getData = (url, callBack) => {
//   return new Promise(function(resolve, reject){
//     wx.request({
//       url: url,
//       header: {
//         Accept: 'application/vnd.api+json'
//       },
//       success: (res) => {
//         const data = res.data;
//         resolve(data)
//       },
//       fail: err => {
//         console.log('Api fetch fail!')
//       },
//       complete: () => {
//         callBack && callBack();
//       }
//     })
//   })
// }

// module.exports = {
//   getData: getData
// }
// require('../../utils/service/article.js');

// 导出自定义封装函数
// 方式一

// 导出方式二
export default function request(opthions){
  // 由于resolve, reject本身就是回调函数，所以可以直接赋值，方式一比较简便  方式二比较繁琐。
  return new Promise((resolve, reject) => {
    wx.request({
      url: opthions.url,
      method: opthions.method || "get",
      data: opthions.data || {},
      success: resolve,
      fail: reject
    })
  })
}

// 方式二
// export default function request(opthions){
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: opthions.url,
//       method: opthions.method || "get",
//       data: opthions.data || {},
//       success: function(res){
//         resolve(res)

//       },
//       fail: function(err){
//         reject(err)
//       }
//     })
//   })
// }