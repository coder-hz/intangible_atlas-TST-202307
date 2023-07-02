<template>
  <div id="folkHandwork">
    <div class="box">
      <img src="../assets/images/pencil.png" alt="" />
      <h3>陶瓷</h3>
      <p>陶瓷，用陶土和瓷土为原料，经配料、成型等流程制成。中国是世界上最早应用陶器的国家之一，而中国瓷器因其极高的实用性和艺术性备受世人的推崇。如今，在陶瓷手艺人们的共同努力下，许多失传的技艺重新得到传承。</p>
    </div>
    <div class="box">
      <img src="../assets/images/palette.png" alt="" />
      <h3>髹 [xiū] 漆</h3>
      <p>中国是世界上最早发现并使用天然漆的国家，最早的漆器是在七千年前河姆渡遗址中发现的木胎朱漆碗，髹漆工艺无疑是中华民族的骄傲和自豪。从古至今，中国漆器工艺形成了多个流派，其中福州脱胎漆器更是中国传统工艺的“三宝”之一，其技艺值得我们去传承。</p>
    </div>
    <div class="box">
      <img src="../assets/images/contrast.png" alt="" />
      <h3>木雕</h3>
      <p>木雕是雕塑的一种，早在七千多年前的河姆渡文化时期就出现木雕鱼，到了唐代，木雕工艺更是达到了发展的巅峰。历经数千年传承的木雕工艺依然需要年轻血液去传承和保护。</p>
    </div>
    <div class="box">
      <img src="../assets/images/drag.png" alt="" />
      <h3>景泰蓝</h3>
      <p>景泰蓝诞生于皇宫，因其在明朝景泰年间盛行，制作技艺比较成熟，使用的珐琅釉多以蓝色为主，故得此名。景泰蓝工艺几经波折，在一代才女林徽因等人的保护下才得以恢复。如今，景泰蓝作品不仅作为“国礼”，也逐渐受到人们的喜爱。</p>
    </div>
    <div class="item" @click="playMusic2">民间手工技艺</div>
    <audio src="../assets/music/dbss.mp3" id="item" ref="item"></audio>
  </div>
</template>

<script>
export default {
  methods: {
    playMusic2() {
      if (this.$refs.item.played.length == 0 || this.$refs.item.paused) {
        this.$refs.item.play()
      } else {
        this.$refs.item.pause()
      }
    }
  }
}
</script>

<style scoped>
#folkHandwork {
  position: relative;
  width: 10rem;
  height: 6.5789rem;
  padding-left: 0.6579rem;
  box-sizing: border-box;
  background-color: #fff;
}

#folkHandwork .box {
  float: left;
  width: 2rem;
  height: 2.0395rem;
  margin: 0.2947rem 1.0526rem 0.8rem 1.3158rem;
  text-align: center;
  font-size: 0.1053rem;
}

#folkHandwork .box:nth-child(3),
#folkHandwork .box:nth-child(4) {
  margin: 0px 1.0526rem 0.6rem 1.3158rem;
}

.item {
  position: absolute;
  width: 1.3158rem;
  height: 3.2895rem;
  top: 1.3158rem;
  left: 4.5rem;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 1.6447rem;
  text-align: center;
  font-size: 0.1974rem;
  writing-mode: vertical-lr;
  padding-left: 0.5rem;
  box-sizing: border-box;
}
</style>
