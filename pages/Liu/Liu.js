// pages/Liu/Liu.js

const app = getApp()
// console.log(app.globData.name)
// console.log(app.globData.age)
// console.log(app.globData.sex)
// 注册一个页面
// 本页面做但两个处理：2.处理生命周期函数，1. 请求数据初始化，3，监听xml中的事件，4.监听页面其他
//信息 比如页面滚动、上拉、刷新等
Page({


  /**
   * 页面的初始数据  
   */
  data: {
    name: 'CoderWhy',
    age: 29,
    students: [
      {id: 1, name: 'kobe', age: 18},
      {id: 2, name: 'janms', age: 20},
      {id: 3, name: 'yao', age: 21},
      {id: 4, name: 'yi', age: 28}
    ],
    counter: 0,
    list: {}
  },
  handGetUserInfo(event){
    console.log('--------')
    console.log(event)
  },
  // 3. 监听xml中的事件 
  handleBtnClinkAdd(){
    console.log('button tap down')
    // 1. 错误方法  不会真正改变
    // this.data.counter += 1
    // console.log(this.data.counter)
    // 2. this.setdata()
    this.setData({
      counter: this.data.counter + 1,
      name: "hero Liu"
    })
  },
  handleBtnClinkSub(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handleViewClick(){
    console.log("hello view 被点了")
  },
  //4. 监听其他事件 监听页面滚动
  onPageScroll(obj){
    console.log(obj)
  // 监听是否滚动到底部
  },
  onReachBottom(){
    console.log('page is on bottom')

  },
  onPullDownRefresh() {
    console.log('下啦刷新')
  },

  /**
   * 在这个页面所做的操作
   * 1. 生命周期函数--监听页面加载
   */
  // onLoad(){}  ES6的增强写法 同下。
  onLoad: function (options) {
    console.log('onLoad')
    // onLoad 时  获取 request数据 赋值给data数据
    wx.request({
      // 需要在微信控制台 配置链接，或者在详细勾选不校验合法域名选项
      url: 'http://123.207.32.32:8000/recommend',
      // 通过回调的方式拿数据，就是下面三种方式
      // success: function(){}  //1.常规
      // success(){}  //2. ES6增强写法
      success: (res) => {
        console.log(res)
        const data = res.data.data
        // this.data.list = data  // 此举能够改变数据，但想点击 页面 刷新最新数据 要使用setData
        this.setData({
          list: data
        })
      }   //3.箭头函数
    })

  },

  /**
   * 2. 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')

  },

  /**
   * 3. 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")

  },

  /**
   * 4.生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')

  },

  /**
   * 5. 生命周期函数--监听页面卸载  当页面销毁时，就会调用改函数
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})