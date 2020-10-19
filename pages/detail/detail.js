// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {
    console.log(options)

  },

  onUnload: function () {

    // 此处有下级页面往home页面传递数据最合适

    // 1. 获取首页页面对象
    // getCurrentPages当前所有栈的页面
    const pages = getCurrentPages()
    console.log(pages)
    const home = pages[pages.length - 2 ]

    // 2. 调用页面对象的setData函数修改数据
    home.setData({
      title: "嘿嘿嘿"
    })

  },

  handleBackHome(){
    console.log("clicked")
    wx.navigateBack({
      delta: 1,
    })
  }


})