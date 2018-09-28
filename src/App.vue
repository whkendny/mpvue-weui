<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('app created and cache logs by setStorageSync')
  },

  globalData: "I am the globalData",
  onLaunch () {
    console.log('App_onLaunch_小程序初始化:--');
  },
  onShow() {
    console.log('App_onShow: 监听小程序显示');
  },
  onHide() {
    console.log('App_onHide: 小程序隐藏触发');
  },
  onPageNotFound() {
    console.log('App_onPageNotFound: 监听页面不存在时触发');
  },
  // 捕捉 app error
  onError(msg) {
    console.log('小程序出错了:--', msg);
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
