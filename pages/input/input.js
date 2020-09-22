// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 定义函数的两种方式
  handleInput: function(event){
    console.log('正在输入...', event)
  },
  handleFocus:function(event){
    console.log("得到焦点",event)
  },
  handleBlur(event){
    console.log("焦点离开",event)
  }

})