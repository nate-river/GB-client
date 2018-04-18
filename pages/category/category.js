// pages/category/category.js
const all = require('../../utils/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: []
  },

  tap: function (e) {
    if (e.currentTarget.dataset.info) {
      wx.showModal({
        title: '详情',
        content: e.currentTarget.dataset.info,
        showCancel: false,
        confirmText: '关闭',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    all.forEach(data => {
      data.children.forEach(data => {
        if (data.id == options.id) {
          console.log(data.name);
          wx.setNavigationBarTitle({
            title: data.name.trim()
          })
          this.setData({
            desc: data.desc ? data.desc.trim() : null,
            categories: data.children
          })
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})