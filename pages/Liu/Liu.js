// pages/Liu/Liu.js
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
    counter: 0
  },

  handleBtnClinkAdd(){
    console.log('button tap down')
    // 1. 错误方法  不会真正改变
    // this.data.counter += 1
    // console.log(this.data.counter)
    // 2. this.setdata()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClinkSub(){
    this.setData({
      counter: this.data.counter - 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
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