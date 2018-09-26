<template>
  <div class="page">
    <view class="page__hd">
      <view class="page__title">Swiper</view>
      <view class="page__desc">滑块视图容器，这里采用小程序原生 swiper 组件实现。</view>
    </view>
    <div class="page__bd page__bd_spacing">
      <swiper indicator-active-color="red" display-multiple-items="2" :previous-margin="previousMargin+'px'" :next-margin="nextMargin+'px'"
      :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" :vertical="vertical"
        @change="swiperChange" @animationfinish="animationfinish">
        <div v-for="(item, index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
      </swiper>
    </div>
    <div class="page-control">
      <div class="weui-cells weui-cells_after-title">
        <view class="weui-cell weui-cell_switch">
          <view class="weui-cell__bd">指示点</view>
          <view class="weui-cell__ft">
            <switch :checked="indicatorDots" @change="changeProperty" data-property-name="indicatorDots"/>
          </view>
        </view>

        <view class="weui-cell weui-cell_switch">
          <view class="weui-cell__bd">自动播放</view>
          <view class="weui-cell__ft">
            <switch :checked="autoplay" @change="changeProperty" data-property-name="autoplay"/>
          </view>
        </view>

        <view class="weui-cell weui-cell_switch">
          <view class="weui-cell__bd">衔接滑动</view>
          <view class="weui-cell__ft">
            <switch :checked="circular" @change="changeProperty" data-property-name="circular"/>
          </view>
        </view>

        <view class="weui-cell weui-cell_switch">
          <view class="weui-cell__bd">竖向</view>
          <view class="weui-cell__ft">
            <switch :checked="vertical" @change="changeProperty" data-property-name="vertical"/>
          </view>
        </view>
      </div>
    </div>

    <!-- 切换时长 -->
    <div class="page-section page-section-spacing">
      <view class="page-section-title">
        <text>幻灯片切换时长(ms)</text>
        <text class="info">{{duration}}</text>
      </view>
      <slider :value="duration" min="100" max="3000" @change="changeProperty" data-property-name="duration" />

      <view class="page-section-title">
        <text>自动播放间隔时长(ms)</text>
        <text class="info">{{interval}}</text>
      </view>
      <slider :value="interval" min="100" max="3000" @change="changeProperty" data-property-name="interval" />

      <view class="page-section-title">
        <text>前边距(px)</text>
        <text class="info">{{previousMargin}}</text>
      </view>
      <slider :value="previousMargin" min="0" max="100" @change="changeProperty" data-property-name="previousMargin" />

      <view class="page-section-title">
        <text>后边距(px)</text>
        <text class="info">{{nextMargin}}</text>
      </view>
      <slider :value="nextMargin" min="0" max="100" @change="changeProperty" data-property-name="nextMargin" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      vertical: false,
      previousMargin: 10,
      nextMargin: 10,
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
    }
  },
  methods: {
    swiperChange(e) {
      console.log('第' + e.mp.detail.current + '张轮播图发生了滑动');
    },
    animationfinish(e) {
      console.log('第' + e.mp.detail.current + '张轮播图滑动结束');
    },
    changeProperty(e) {
      let propertyName = e.currentTarget.dataset.propertyName;
      this[propertyName] = e.mp.detail.value;
    }
  }
}
</script>

<style>
.slide-image {
  width: 100%;
  height: 100%;
}
page {
  background-color: #F8F8F8;
  height: 100%;
  font-size: 32rpx;
  line-height: 1.6;
}
.page-body{
  padding-top: 60rpx;
}
.page-section{
  width: 100%;
  margin-bottom: 60rpx;
}
.page-section_center{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page-section:last-child{
  margin-bottom: 0;
}
.page-section-gap{
  box-sizing: border-box;
  padding: 0 30rpx;
}
.page-section-spacing{
  box-sizing: border-box;
  padding: 0 80rpx;
}
.page-section-title{
  font-size: 28rpx;
  color: #999999;
  margin-bottom: 10rpx;
  padding-left: 30rpx;
  padding-right: 30rpx;
}
.page-section-gap .page-section-title{
  padding-left: 0;
  padding-right: 0;
}

.demo-text-1{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #1AAD19;
  color: #FFFFFF;
  font-size: 36rpx;
}
.demo-text-1:before{
  content: 'A';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-2{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #2782D7;
  color: #FFFFFF;
  font-size: 36rpx;
}
.demo-text-2:before{
  content: 'B';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-3{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #F1F1F1;
  color: #353535;
  font-size: 36rpx;
}
.demo-text-3:before{
  content: 'C';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

button{
  margin-bottom: 30rpx;
}
button:last-child{
  margin-bottom: 0;
}
.page-section-title{
  padding: 0;
}
.swiper-item{
  display: block;
  height: 150px;
}
.page-section-title{
  margin-top: 60rpx;
  position: relative;
}
.info{
  position: absolute;
  right: 0;
  color: #353535;
  font-size: 30rpx;
}
.page-foot{
  margin-top: 50rpx;
}

</style>
