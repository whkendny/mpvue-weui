<template>
  <div class="page">
    <div class="page__hd">
      <div class="page__title">页面通讯</div>
      <div class="page__desc">利用 vuex 实现数据的管理</div>
    </div>
    <div class="page__bd page__bd_spacing">
      <button class="weui-btn mini-btn" type="primary" size="mini" @click="getMpvueInfo">点击显示 state => mpvueInfo</button>
      <button class="weui-btn mini-btn" type="warn" size="mini" @click="commitMpvueInfo">点击更新 state => mpvueInfo</button>
      <div class="mpvueInfo-desc" v-show="showMpvueInfo">{{mpvueInfo}}</div>
      <button type="primary" class="mt-15" @click="turnToVuexPage">点击跳转</button>
    </div>
  </div>
</template>

<script>
//  mapState,
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      stateMpvueInfo: '',
      showMpvueInfo: false
    }
  },
  mounted() {
    // 这里的`mpvueInfo`是通过计算属性返回的
    console.log(this.mpvueInfo);
  },
  methods: {
    // 在methods中提交 mutation
    // 等价于 this.$store.commit('SET_MPVUEINFO')
    ...mapMutations({
      // 将`this.setMpvueInfoVuex(arg)`映射为 `this.$sotre.commit('SET_MPVUEINFO', arg)`
      setMpvueInfoVuex: 'SET_MPVUEINFO'
    }),
    turnToVuexPage() {
      wx.navigateTo({
        url: '/pages/vuexPage/main'
      })
    },
    getMpvueInfo() {
      this.showMpvueInfo = true;
    },
    commitMpvueInfo() {
      let mpvueInfoUpate = '基于 Vue.js 的小程序开发框架，从底层支持 Vue.js 语法和构建工具体系。---created by 美团点评'
      this.setMpvueInfoVuex(mpvueInfoUpate);
      // this.$store.commit('SET_MPVUEINFO', mpvueInfoUpate)
    }
  },

  computed: {
    // 辅助函数 `mapGetters`及对象展开运算符将`store`中的getter中的`mpvueInfo`映射到局部计算属性;
    ...mapGetters([
      'mpvueInfo'
    ])
  }

  // 也可以使用
  // computed: mapState({
  //   // mpvueInfo: state => state.mpvueInfo
  //   // 或者
  //  'mpvueInfo'
  // })
}
</script>

<style>
.mpvueInfo-desc {
  margin-top: 15px;
  font-size: 18px;
  color: #333;
  text-align: justify;
  word-break: break-all;
}
.mt-15 {
  margin-top: 15px;
}
</style>
