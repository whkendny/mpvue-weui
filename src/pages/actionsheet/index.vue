<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">ActionSheet</div>
      <div class="page__desc">弹出式菜单，采用小程序原生的actionsheet</div>
    </div>
    <div class="page__bd">
      <div class="weui-btn-area">
        <button type="default" @click="open">ActionSheet</button>
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
    open() {
      wx.showActionSheet({
        itemList: ['A', 'B', 'C'],
        itemColor: 'red',
        success: function (res) {
          console.log(res.tapIndex)
        },
        fail: function (msg) {
          console.log('fail:--', msg);
        },
        complete: function (msg) {
          console.log('complete:--', msg);
        }
      });
    }
  }
}
</script>

<style>

</style>
