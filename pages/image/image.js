// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: "",

  },
  handChooseAlbum(){
    const _this = this
    // 系统API 选择相册图片或者即时拍照
    wx.chooseImage({
      count: 0,
      success: function(res){
        // console.log(res)
        // 1. 取出路径
        const path = res.tempFilePaths[0]

        //2. 把图片显示在对应的image标签里 改变数据两种方法一种用this 一种用箭头函数
        _this.setData({
          imagePath: path
        })
      }
    })
  },
  handleImageLoad(){
    console.log("图片加载完成")
  }
})