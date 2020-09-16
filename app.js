//这里是注册一个小程序的开始

// 注册一个小程序
//app.js
App({
  //初始化生命周期函数  关闭小程序，他会在后台存活2哥小时，所以关闭后再次打开不会走初始化函数，因为之前的初始化保存了
  //小程序初始化完成后 执行的生命周期函数
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // 异步执行
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res)

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

  },
  // 小程序界面显示出来之后执行的的生命周期函数
  onShow: function(options){
    console.log('界面显示出来：onShow')
    //判断小程序进入场景,可以根据不同的页面显示不同的进入画面
    console.log(options)
    switch(options.scene){
      case 1001:
        // 微信端进入
        break;
      case 1011:
        //二维码进入
        break;  
    }
    //在onShow生命周期函数里，可以 获取用户信息 保存用户信息，并且发送到对应服务器
    //系统提供的函数
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
    wx.request({
      url: 'url',
    })
  },
  //界面隐藏会执行
  onHide: function(){console.log('界面隐藏：onHide')},

  //小程序出现错误时，执行的生命周期函数,
  onError: function(){console.log('错误时执行:onError')},  
  //全局数据，所有页面都可以共享
  globalData: {
    name: 'hero Liu',
    age: 18,
    sex: 'male'
  }
})