// 封装的好处：
// 1. 降低wx.request的耦合度
// 2. 使用promise方式返回数据，链式调用 防止回调地狱
// 3. promise主要是封装原生api，异步请求

import request from "../../service/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // ----------1. 调用原生请求方式-------------------
    this.get_data_origin()

    // ----------2. 使用封装的request函数发送请求-------
    // promise最大的好处就是防止出现回调地狱
    request({
      url: 'http://httpbin.org/post',
      method: "post",
      data: {
        name: "hero liu",
        age: 18
      },
    }).then(res => {console.log("++++++", res)}).catch(err => {
      console.log("-------", err)
    })
  },

  get_data_origin(){
     // // 1. 简单的get请求
    // wx.request({
    //   // 1. 发送网络请求（不能使用ip 只能使用域名，需要配置域名（小程序后台（微信公众平台）-开发-开发设置-服务器域名））
    //   // PS： 开发调试阶段可以不用备案   详情->勾选 不校验合法域名...选项即可进行正常访问
    //   url: 'http://123.207.32.32:8000/recommend',

    //   // 2. 接受返回的结果（success回调函数）
    //   success: function(res){
    //     console.log(res)
    //   }
    // })

    // // 2. 带参数的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',

    //   // 请求参数
    //   data: {
    //     type:"sell",
    //     page: 1
    //   },

    //   // 2. 接受返回的结果（success回调函数）
    //   success: function(res){
    //     console.log(res)
    //   }
    // })

    // // 3. post的请求，带参数
    // wx.request({
    //   url: 'http://httpbin.org/post',

    //   data: {
    //     name: "hero liu",
    //     age: 18
    //   },
      
    //   // 默认get请求 改成post请求
    //   method: "POST",
      
    //   // 访问成功
    //   success: function(res){
    //     console.log("success", res)
    //   },

    //   // 访问失败
    //   fail: function(err){
    //     console.log("fail", err)
    //   },

    //   // 访问接受回调，不管是否访问成功 类似 finally
    //   complete: function(res){
    //     console.log("complete", res)
    //   }


    // })
  }
})