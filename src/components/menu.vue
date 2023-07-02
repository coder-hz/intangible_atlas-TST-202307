<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide1"></div>
        <div class="swiper-slide swiper-slide2"></div>
        <div class="swiper-slide swiper-slide3"></div>
        <div class="swiper-slide swiper-slide4"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="category">
      <div class="category1">
        <span class="el-icon-star-on"></span>
        <p>分类</p>
      </div>
      <div class="folkArt"><router-link to="/art">民间美术</router-link></div>
      <div class="folkMusic"><router-link to="/music">民间音乐</router-link></div>
      <div class="folkDance"><router-link to="/dance">民间舞蹈</router-link></div>
      <div class="folkHandwork"><router-link to="/handwork">民间手工艺</router-link></div>
      <div class="folkAcrobatics" @click="func1"><router-link to="#">民间杂技</router-link></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper' // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入
export default {
  methods: {
    func1() {
      window.alert('暂未上线,敬请期待')
    }
  },
  data() {
    return {}
  },

  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 1500, // 每次轮播间隔的ms数，默认3000ms
        stopOnLastSlide: false, // 播放完最后一张图片后继续轮播
        disableOnInteraction: false // 用户操作轮播图后，比如点击轮播按钮或小圆点，继续自动轮播
      },

      loop: true,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next', // 右按钮
        prevEl: '.swiper-button-prev' // 左按钮
      }
      // effect: 'fade'
    })
  },
  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy()
      this.swiper = null
    }
  }
}
</script>

<style scoped>
.swiper-container {
  width: 3rem;
  height: 2.7rem;
}
.swiper-slide {
  text-align: center;
  line-height: 2.7rem;
  color: #b0b0b0;
}
.swiper-slide img {
  width: 3rem;
  height: 2.7rem;
}
.swiper-wrapper div {
  background-size: 3rem 2.7rem;
}
.swiper-slide1 {
  background: url('../assets/images/dly.png') no-repeat;
}
.swiper-slide2 {
  background: url('../assets/images/zh.png') no-repeat;
}
.swiper-slide3 {
  background: url('../assets/images/wjz.png') no-repeat;
}
.swiper-slide4 {
  background: url('../assets/images/mzr.png') no-repeat;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 20px;
}
.banner {
  display: block;
  width: 10rem;
  height: 6.5789rem;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(253, 117, 168, 1) 0%, rgba(25, 43, 115, 1) 100%);
  margin-top: -1.8947rem;
  padding-top: 25px;
}
.category {
  margin-top: 0.5rem;
}

.category .el-icon-star-on {
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.3);
}
.category .category1 {
  position: relative;
  background: none;
}

.category1 p {
  position: absolute;
  top: 0.0132rem;
  left: 0.5921rem;
  color: #fff;
}

.category div {
  float: left;
  width: 1.5rem;
  height: 1.8rem;
  margin-left: 0.025rem;
  margin-right: 0.025rem;
  margin-top: 0.05rem;
  opacity: 1;
  text-align: center;
  line-height: 1.6382rem;
  font-size: 0.1316rem;
}

.category div:nth-child(1) {
  margin-left: 0.35rem;
}

.category .folkArt {
  background: #e88484;
}

.category .folkMusic {
  background: rgba(144, 161, 90, 1);
}

.category .folkDance {
  background: rgba(235, 183, 183, 1);
}

.category .folkHandwork {
  background: rgba(217, 163, 167, 1);
}

.category .folkAcrobatics {
  background: rgba(158, 123, 123, 1);
}

.box p {
  font-size: 0.0987rem;
}
</style>
