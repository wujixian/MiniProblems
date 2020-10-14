// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    isShow:true

  },
  hadleIncrement(event){
    //自定义组件发出的附加数据  是通过event字段来获取附加数据的
    console.log(event)
    this.setData({count:this.data.count + 1})
  },
  tabControlClick(event){
    console.log(event.detail.index, event.detail.title)

  },
  handleIncrementCpn(){
    // 修改my-select中的counter数字
    // 1. 获取对应自定义组件的this对象
    // 可以根据组件的#id和.class来获取组件对象,推荐id 全局唯一
    const my_select = this.selectComponent("#select-id");  

    // 2.1 通过setData修改组件中的数据（不合理）
    my_select.setData({
      counter: my_select.data.counter + 20
    })

    // 2.2 通过组件自己提供的借口来修改数据
    my_select.incrementCounter(20)
  },

  handleBtnClick(){
    this.setData({
      isShow: !this.data.isShow
    })
  }

})