// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"你好，小程序",
    firstname:"hero",
    lastname:"Liu",
    age: 10,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    mapFlag: false,
    isShow: false,
    score: 50,
    movies: ["星际穿越","盗梦空间", "大话西游"],
    nums: [
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],
    letters: ["a","b","m","c"]

    },
  handleSwitchColor() {
    console.log('------')
    this.setData({
      isActive: !this.data.isActive

    })
  },
  handleSwithShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement(){
    this.setData({
      score: this.data.score + 10
    })
    wx.showToast({
      title: '累加成功',
      icon: "success",
      duration: 1000,
      mask: true,
    })
  },
  changeMapStyle(){
    var _this =  this
    console.log('map style change')
    _this.setData({
      mapFlag: !_this.data.mapFlag
    })

  },
  onLoad(){
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000) 
    var _this = this
    wx.getLocation({
      success: function(res){
        if (res && res.longitude){
          console.log(res)
          // console.log(res.longitude, res.latitude)
          // _this.setData({


          // })
          

        }

      }
      
    })
  }
})