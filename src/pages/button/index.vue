<template>
  <div class="page">
    <div class="page">
      <div class="page__hd">
        <div class="page__title">Button</div>
        <div class="page__desc">按钮，WeUI采用小程序原生的按钮为主体，加入一些间距的样式。</div>
      </div>
      <div class="page__bd page__bd_spacing">
        <button class="weui-btn" type="primary">页面主操作 Normal</button>
        <button class="weui-btn" type="primary" hover-class="none">页面主操作 hover-class</button>
        <button class="weui-btn" type="primary" disabled="true">页面主操作 Disabled</button>

        <button class="weui-btn" type="default">页面次要操作 Normal</button>
        <button class="weui-btn" type="default" disabled="true">页面次要操作 Disabled</button>

        <button class="weui-btn" type="warn">警告类操作 Normal</button>
        <button class="weui-btn" type="warn" disabled="true">警告类操作 Disabled</button>

        <div class="button-sp-area">
          <button class="weui-btn" type="primary" open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserMsg" plain="true">按钮-getuserinfo</button>
          <button class="weui-btn" type="primary" open-type="contact" @contact="getContact" send-message-title send-message-path send-message-img show-message-card="true">按钮-contact</button> <!--客服消息回调-->
          <button class="weui-btn" type="primary" open-type="getPhoneNumber" @getphonenumber="getUserPhoneNumber" plain="true">按钮phone-number</button>
          <button class="weui-btn" type="primary" open-type="openSetting" plain="true">按钮-openSetting</button>

          <button class="weui-btn" type="primary" open-type="feedback" plain="true">按钮-feedback</button>
          <button class="weui-btn" type="primary" open-type="share" plain="true">按钮-share</button>


          <button class="weui-btn" type="default" @tap="setLoading" :loading="loading" plain="true">设置loading属性</button>
          <button class="weui-btn" type="default" @tap="setPlain" :plain="plain">设置plain属性</button>
          <button class="weui-btn" type="default" @tap="setDisabled" :disabled="disabled">设置disabled属性</button>

          <button class="weui-btn" type="default" disabled="true" plain="true">按钮</button>

          <button class="weui-btn mini-btn" type="primary" size="mini">按钮</button>
          <button class="weui-btn mini-btn" type="default" size="mini">按钮</button>
          <button class="weui-btn mini-btn" type="warn" size="mini">按钮</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex

export default {
  // data() {
  //   return {
  //     loading: false
  //   }
  // },
  data: {
    loading: false,
    plain: false,
    disabled: false
  },
  onShareAppMessage() {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: 'pages/index/main?id=123'
    }
  },

  methods: {
    getUserMsg(e) {
      console.log(e);
    },
    getContact(e) {
      console.log(e);
    },

    getUserPhoneNumber(e) {
      console.log(e);
    },
    setLoading(e) {
      this.loading = !this.loading
    },
    setPlain() {
      this.plain = !this.plain
    },
    setDisabled() {
      this.disabled = !this.disabled
    }
  }
}
</script>
<style>

</style>
