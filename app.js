//app.js
// -------------------------------------
// 使用箭头函数和this配合使用 才能使this生效，否设this是undefine


const TOKEN = "token"
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 1. 先从本地storge中取token，当有当时候 只需验证，没有当时候再login获取token
    const token = wx.getStorageSync(TOKEN)

    // 2. 判断token是否存在
    if (token && token.length != 0){
      // 已有toen，判断是否过期
      this.check_token(token)
    }
    else{
      // 么有token  login获取token
      this.login()
    }
    
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

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

  check_token(token){

    console.log("执行了token验证操作")
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: "POST",
      header: {token},

      success: (res) => {
        if (!res.data.errCode){
          console.log("token有效")
          // 把本地storge当token取出来，放到全局变量里（内存），这样大家就又可以都用了
          this.globalData.token = token
        }
        else{
          this.login()
        }
        console.log(res)
      },
      fail: function(err){
        console.log(err)
      }
    })

  },

  login(){
    console.log("执行了登陆操作")

    // 登录
    wx.login({
      // code只有5分钟有效期
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // 1. 获取code
        const code = res.code

        // 2. 将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',

          data: {
            code
          },
          
          method: "POST",
          success: res => {

            // 1. 取出token
            const token = res.data.token

            // 2. 将token保存在globalData中
            this.globalData.token = token

            // 3. 本地存储token
            // 3.1异步保存
            // wx.setStorage({
            //   data: data,
            //   key: 'key',
            // })
            // 3.2 同步保存   
            wx.setStorageSync(TOKEN, token)

          }

        })
      }
    })
  },

  globalData: {
    userInfo: null,
    token: ""
  }
})