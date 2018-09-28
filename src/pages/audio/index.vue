<template>
  <div class="page">
    <div class="page__hd">
        <div class="page__title">音频-audio</div>
        <div class="page__desc"></div>
    </div>

    <div class="audio-box">
      <audio :poster="poster" :name="name" :author="author" :src="src" id="myAudio" :controls="controls" loop="true"
        @play="playEvent" @pause="pauseEvent" @timeupdate="timeupdateEvent" @ended="endedEvent" @error="errorEvent"
      ></audio>

      <div class="audio-control">
        <button type="primary" @tap="audioPlay">播放</button>
        <button type="primary" @tap="audioPause">暂停</button>
        <button type="primary" @tap="audio14">设置当前播放时间为14秒</button>
        <button type="primary" @tap="audioRestart">回到开头</button>
        <button type="primary" @tap="audioPluginShow">是否显示默认控件</button>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    audioCtx: null,
    controls: true
  },

  onReady() {
    this.audioCtx = wx.createAudioContext('myAudio');
    console.log('audioCtx:--', this.audioCtx);
  },

  methods: {
    playEvent(e) {
      console.log('播放事件事件触发:--', e);
    },
    pauseEvent(e) {
      console.log('暂停事件触发:--', e);
    },
    timeupdateEvent(e) {
      // console.log('当前播放进度改变:--', e);
    },
    endedEvent(e) {
      console.log('播放完成事件触发:--', e);
    },
    errorEvent(e) {
      console.log('播放发生错误时触发:--', e);
      let detail = e.mp.detail;
      if (detail) {
        let errMsg = detail.errMsg;
        switch (errMsg) {
          case 'MEDIA_ERR_ABORTED': console.log('获取资源被用户禁止'); break;
          case 'MEDIA_ERR_NETWORD': console.log('网络错误'); break;
          case 'MEDIA_ERR_DECODE': console.log('解码错误'); break;
          case 'MEDIA_ERR_SRC_NOT_SUPPORTED': console.log('不合适资源'); break;
          default: console.log('正常播放!');
        }
      }
    },
    audioPlay() {
      this.audioCtx.play();
    },
    audioPause() {
      this.audioCtx.pause();
    },
    audio14() {
      this.audioCtx.seek(14);
    },
    audioRestart() {
      this.audioCtx.seek(0);
    },
    audioPluginShow() {
      this.controls = !this.controls;
    }
  }
}
</script>

<style lang="less">
.audio-box{
  text-align: center;
}
.audio-control{
  margin-top: 20px;
  button{
    margin-bottom: 20px;
  }
}
</style>
