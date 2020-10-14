// components/my-proper/my-proper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 1. 第一种方式，
    // title: String,
    content: String,
    //2. 第二种方式 ，有默认值
    title: {
      type: String,
      value: "我是默认标题",
      observer: function(newVal, oldVal){
        console.log(newVal, oldVal)
      }

    }

  },
  externalClasses: ['titleclass']
})
