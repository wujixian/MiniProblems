// components/my-mslot/my-mslot.js
Component({
  /**
   * 1. --------------让使用者可以给组件传入数据------------------
   */
  properties: {

  },

  /**
   * 2. --------------定义组件内部初始化数据------------------
   */
  data: {

  },

  /**
   * 3. --------------定义组件内部的函数-----------------
   */
  methods: {

  },

  /**
   * 4. --------------定义组件配置选项-----------------
   * 4.1 multipleSlots: 在使用多插槽时需要设置true
   * 4.2 styleIsolation: 设置样式的隔离方式
   */
  options:{
    multipleSlots: true
  },

   /**
   * 5. --------------外界给组件的传入的样式-----------------
   */
  externalClasses:[],

   /**
   * 6. --------------监听properties/data的改变-----------------
   * 外部的observers与properties内部的observers的区别是：
   *    properties的具体新、老数据值，而外部的observers只有新数据值
   */
  observers:{
    counter: function(newval){console.log(newVal)}
  },

   /**
   * 7. --------------组件中监听生命周期函数-----------------
   * 组件 和 页面都是有自己的生命周期
   */
  // 7.1 监听所在页面的生命周期
  pageLifetimes:{
    show(){
      console.log("监听组件所在页面：显示")
    },
    hide(){
      console.log("监听组件所在页面：隐藏")
    },
    resize(){
      console.log("监听组件所在页面尺寸的改变")
    }
  },

  // 7.2 监听组件本身的生命周期
  lifetimes:{
    created(){
      console.log("组件创建")
    },
    attached(){
      console.log("组件添加到具体页面/组件")
    },
    ready(){
      console.log("组件被渲染出来")
    },
    moved(){
      console.log("组件被移到另外一个节点")
    },
    detached(){
      console.log("组件被移除掉")
    }
  }
})
