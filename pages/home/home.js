// pages/home/home.js
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
    return {
      title: "阿欢，看看",
      subtitle: "haah",
      // path很重要 写谁 点击进来的时候就是谁
      path: "/pages/home/home",
      imageUrl: "http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg"
    }

  },

  handleShowToast(){
    wx.showToast({
      title: 'hello',
      duration: 2000,
      icon: "success",
      // image: "/asset/image/a.png"
      mask: true,
      success: function(){
        console.log("展示成功")
      },
      fail: function(){
        console.log("展示失败")
      },
      complete: function(){
        console.log("展示完成")
      }
    })

  },

  handleShowModal(){
    wx.showModal({
      title: "标题",
      content: "内容",
      cancelColor: "red",
      cancelText: "cancel",
      // showCancel: false,  // 是否展示取消按键
      success: function(res){
        console.log(res)
        if (res.cancel){
          console.log("cancel")
        }
        if (res.confirm){
          console.log("confirm")
        }


      },
      fail: function(){
        console.log("fail")
      }
    })
  },

  handleShowLoading(){
    wx.showLoading({
      title: '加载',
      mask: true
    })
    // 1. 由于没有设置定时器 一闪而过
    // wx.hideLoading({
    //   success: (res) => {
    //     console.log("load aready")
    //   },
    // })

    // 2. 设置定时器
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {
          console.log("load aready")
        },
      })
    }, 1000)
  },

  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ["拍照", "相册"],
      itemColor: "red",
      mask: true,
      success: function(res){
        console.log(res)
        switch(res.tapIndex){
          case 0: console.log("拍照"); break;
          case 1: console.log("相册")
        }
        

      },

      fail: function(){
        console.log("取消")
      },

      complete: function(){

      }

    })
  }

})