// pages/home/home.js
Page({

  data: {
    titles: ["衣服","帽子","鞋子"],

  },
  handleBtnClick(){
    console.log('button click')

  },
  handleTouchStart(e){
    console.log(" 触摸开始手势  handleTouchStart", e)
  },
  handleTouchMove(e){
    console.log("chu mo触摸移动手势  handleTouchMove", e)
  },
  handleLongPress(e){
    console.log("长按手势   handleLongPress", e)
  },
  handleTouchEnd(e){
    console.log("触摸结束手势   handleTouchEnd", e)
  },
  handleTap(e){
    console.log("轻点手势   handleTap", e)
  },
  handleTouchCancel(e){
    console.log("触摸取消手势   handleTouchCancel", e)
  },
  hadleEventClick(event){
    console.log("-----", event)
  },
  handleEventEnd(event){
    console.log("++++++", event)
  },
  handleOutter(event){
    console.log(event)

  },
  handleInner(event){
    console.log(event)
  },
  handleItemClick(event){
    console.log(event)
    const dataset = event.target.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index)
  },

  // 事件冒泡 和 事件捕获
  hadleCaptureView1(){
    console.log("hadleCaptureView1")
  },
  handleBindView1(){
    console.log("handleBindView1")
  },
  hadleCaptureView2(){
    console.log("hadleCaptureView2")
  },
  handleBindView2(){
    console.log("handleBindView2")
  },
  hadleCaptureView3(){
    console.log("hadleCaptureView3")
  },
  handleBindView3(){
    console.log("handleBindView3")
  },
})