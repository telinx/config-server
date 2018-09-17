//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animation: {},
    animationCate: {},
    extendStatus: false,
    activeCategoryId: 0,
    banners: [
      {
        "businessId": 1222,
        "dateAdd": "2017-11-13 15:57:24",
        "dateUpdate": "2017-11-21 10:24:56",
        "id": 2296,
        "linkUrl": "pages/shop-cart/index",
        "paixu": 1,
        "picUrl": "https://bfs.biyao.com/group1/M00/56/3B/rBACW1uSNieACoAEAADWpiZr9SQ999.jpg",
        "remark": "",
        "status": 0,
        "statusStr": "显示",
        "title": "lkllk",
        "type": "0",
        "userId": 1614
      },
      {
        "businessId": 23334,
        "dateAdd": "2017-11-13 15:57:51",
        "dateUpdate": "2017-11-17 10:47:58",
        "id": 2297,
        "linkUrl": "",
        "paixu": 2,
        "picUrl": "https://bfs.biyao.com/group1/M00/56/2F/rBACYVuSNSWAT4ziAABwoQ-8vmY671.jpg",
        "remark": "",
        "status": 0,
        "statusStr": "显示",
        "title": "23434",
        "type": "0",
        "userId": 1614
      },
      {
        "businessId": 3,
        "dateAdd": "2017-11-13 15:58:22",
        "dateUpdate": "2017-11-17 10:48:06",
        "id": 2298,
        "linkUrl": "",
        "paixu": 3,
        "picUrl": "https://bfs.biyao.com/group1/M00/56/2F/rBACYVuSNUeALyx4AADw4rOxOxk783.jpg",
        "remark": "",
        "status": 0,
        "statusStr": "显示",
        "title": "3",
        "type": "0",
        "userId": 1614
      },
      {
        "businessId": 4,
        "dateAdd": "2017-11-13 15:58:36",
        "dateUpdate": "2017-11-17 10:48:32",
        "id": 2299,
        "linkUrl": "",
        "paixu": 4,
        "picUrl": "https://bfs.biyao.com/group1/M00/56/3A/rBACW1uSNXeAEncaAACYs-OkPo8814.jpg",
        "remark": "",
        "status": 0,
        "statusStr": "显示",
        "title": "4",
        "type": "0",
        "userId": 1614
      },
      {
        "businessId": 5,
        "dateAdd": "2017-11-21 10:26:03",
        "dateUpdate": "2017-11-21 10:26:11",
        "id": 2477,
        "linkUrl": "",
        "paixu": 5,
        "picUrl": "https://bfs.biyao.com/group1/M00/54/80/rBACVFuSNgGADpvKAADCd-GoRJM265.jpg",
        "remark": "",
        "status": 0,
        "statusStr": "显示",
        "title": "5",
        "type": "0",
        "userId": 1614
      }
    ]
  },
  tabClick: function (e) {
    this.setData({
      activeCategoryId: e.currentTarget.id
    });
    console.log("asdsada---->")
  },
  //事件处理函数
  bindViewTap: function() {
  
  },
  onLoad: function () {
  },
  onReady: function () {
    this.animation = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 150,
      timingFunction: 'linear',
      delay: 100,
      /**
       * 以什么为基点做动画  效果自己演示
       * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
       * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
       */
      transformOrigin: '50% 50% 0',
      success: function (res) {
        console.log(res)
      }
    })
    this.animationCate = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 150,
      timingFunction: 'linear',
      delay: 100,
      transformOrigin: '0% 50% 100%',
      success: function (res) {
        console.log(res)
      }
    })
  },
  extendCate: function(){
    //顺时针旋转10度
    //
    if (!this.data.extendStatus){
      this.animation.rotate(180).step();
      this.animationCate.height(180).step();
      this.setData({
        extendStatus: true,
        animation: this.animation.export(),
        animationCate: this.animationCate.export()
      })
    }else{
      this.animation.rotate(0).step()
      this.animationCate.height(0).step();
      this.setData({
        extendStatus: false,
        animation: this.animation.export(),
        animationCate: this.animationCate.export()
      })
    }
    
  }
})
