<template>
  <div class="page">
    <div class="page__hd">
        <div class="page__title">webView</div>
        <div class="page__desc">画廊，建议采用小程序原生的wx.chooseImage和wx.previewImage来实现。详情请看小程序文档。</div>
    </div>
    <webView :src="webSrc"></webView>
</div>
</template>

<script>
export default {
  data: {
    webSrc: ''
  },
  onShow() {
    let url = decodeURIComponent(this.$root.$mp.query.url);
    if (url.indexOf('https') === -1 && url.indexOf('http') > -1) {
      url = url.replace('http', 'https')
    }
    console.log('webView带参:--', url);
    this.webSrc = url
  }
}
</script>

<style>

</style>
