<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">Toast</div>
      <div class="page__desc">弹出式提示，采用小程序原生的toast</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button class="weui-btn" type="default" @click="openToast">成功提示</button>
        <button class="weui-btn" type="default" @click="openLoading">加载中提示</button>
        <button class="weui-btn" type="default" @click="openError">错误提示</button>
        <button class="weui-btn" type="default" @click="openWxLoading">show loading</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    openToast() {
      wx.showToast({
        title: '已完成',
        icon: 'success',
        mask: true,
        duration: 3000
      });
    },
    openLoading() {
      wx.showToast({
        title: '数据加载中',
        icon: 'loading',
        duration: 3000
      });
    },
    openWxLoading() {
      wx.showLoading({
        title: 'wx.showLoading',
        mask: true,
        duration: 3000,
        success: function(res) {
          console.log(res);
        }
      })
    },
    openError() {
      wx.showToast({
        title: '打开出错',
        mask: true,
        image: '../../images/error.png',
        duration: 3000,
        success: function(res) {
          console.log('success:--', res);
        },
        fail: function(res) {
          console.log('fail:--', res);
        },
        complete: function(res) {
          console.log('complete:--', res);
        }
      })
    }
  }
}
</script>

<style>

</style>
