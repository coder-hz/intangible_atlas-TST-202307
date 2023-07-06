<template>
  <header class="header">
    <div class="logo">
      <h1>
        <router-link to="#">艺品纷呈</router-link>
      </h1>
    </div>
    <div class="search"><input type="search" name="" id="" placeholder="民间美术" /><button>搜索</button></div>
    <nav class="nav"><span class="el-icon-s-operation"></span><span>网站导航</span></nav>
    <h1 class="welcome">艺品纷呈欢迎你!</h1>
    <h3>traditional culture</h3>
    <div class="goNext" @click="playMusic1">continue</div>
    <audio src="../assets/music/gsx.mp3" id="goNext" ref="goNext"></audio>
  </header>
</template>

<script>
export default {
  methods: {
    playMusic1() {
      // console.log(this.$refs.goNext) 还没写axios代码,等后面写了再改
      if (this.$refs.goNext.played.length == 0 || this.$refs.goNext.paused) {
        this.$refs.goNext.play()
      } else {
        this.$refs.goNext.pause()
      }
    }
  }
}
</script>

<style scoped>
.header {
  width: 10rem;
  height: 9rem;
  background: url(../assets/images/bg.jpg) no-repeat;
  position: relative;
  background-size: 100%;
}

/* logoSEO优化 */
.logo a {
  display: block;
  background: url(../assets/images/logo.png) no-repeat;
  background-size: 80%;
  text-indent: -9999rem;
  width: 1.3158rem;
  height: 1.3158rem;
}

.header h1 {
  font-size: 0.3947rem;
}

.header .welcome {
  position: absolute;
  left: 3.2895rem;
  top: 1.3158rem;
  color: #fff;
}

.header h3 {
  position: absolute;
  left: 3.8158rem;
  top: 2.0658rem;
  font-size: 0.1974rem;
  color: #fff;
}

.header .goNext {
  position: absolute;
  left: 4.03rem;
  top: 2.5rem;
  width: 1.3158rem;
  height: 0.3026rem;
  text-align: center;
  font-size: 0.1974rem;
  border-radius: 0.1645rem;
  background: #fff;
  color: darkorange;
}
.nav {
  overflow: hidden;
  position: absolute;
  top: 0.1645rem;
  right: 0;
  width: 152px;
  height: 79.9976px;
  color: #fff;
  text-align: center;
}

.nav span {
  position: absolute;
  padding-left: 15.0024px;
  padding-top: 10.0016px;
  font-size: 13.9992px;
  top: 10px;
  right: 25px;
}
.nav .el-icon-s-operation {
  position: absolute;
  font-size: 0.1645rem;
  top: 10px;
  right: 100px;
}
.search {
  position: absolute;
  top: 0.858rem;
  right: 2rem;
}

.header .search input {
  width: 1.6447rem;
  height: 0.2632rem;
  border-radius: 0.1316rem;
  border: 0.0066rem solid orange;
  padding-left: 0.1rem;
  font-size: 0.0789rem;
}

.header .search button {
  width: 0.5rem;
  height: 0.2632rem;
  border-radius: 0.1316rem;
  margin: -0.25rem;
  border: 0.0066rem solid orange;
  background-color: orange;
  color: #fff;
  font-size: 0.0658rem;
  font-size: 0.0789rem;
}
</style>
