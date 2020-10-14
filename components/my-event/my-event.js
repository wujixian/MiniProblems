// components/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement(){
      console.log("------")
      this.triggerEvent("incremnt", {name:'hero', age: 18}, {})  //传递：事件名，数据，选项
    }

  }
})
