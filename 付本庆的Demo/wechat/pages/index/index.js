//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/football.jpg',
   '/images/hust.jpg',
   '/images/longzhou.jpg'


      
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  
  onLoad: function () {
  }
})