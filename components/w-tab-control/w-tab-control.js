// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: Array,
      value: []
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event){
      //1.通过event来获取index
      const index = event.currentTarget.dataset.index;
      console.log(index)

    //2. 修改currentIndex数据
    this.setData({
      currentIndex: index
    })

    //3. 给外部通知内部点击事件
    this.triggerEvent("itemClick", {index, title: this.properties.title[index]}, {})
    }

  }
})
