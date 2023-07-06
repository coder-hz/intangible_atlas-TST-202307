<template>
  <div id="folkMusic">
    <div class="content">
      <h2>民间音乐</h2>
      <div class="description">
        民间音乐（Folk music），又称民俗音乐、民间短篇诗歌等，简称民谣、民歌、民乐，于国际民间音乐协会（IFMC）之解释定义为“经过口传过程发展起来的普罗大众音乐”，也就是该音乐散布过程，纯粹是由演奏者或音乐接收者记录教习，并亲自相传所得。
        民间音乐指由广大人民群众在漫长历史过程中，通过口口相传而流传下来的音乐形式和音乐作品。它无论从使用的乐器、演奏的乐谱还是演奏形式，都有着极强的民族性和地域性，与当地的民俗习惯相溶合，与当地的民俗活动相结合。
      </div>
    </div>
    <div class="videoBox">
      <video src="" controls muted></video>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#folkMusic {
  position: relative;
  width: 10rem;
  height: 6.5789rem;
  padding-top: 0.5rem;
  background: url(../assets/images/folkMusic.png) no-repeat;
}

#folkMusic .content {
  float: right;
  padding-right: 0.6579rem;
}

#folkMusic .videoBox {
  float: left;
  border: 2px solid #ccc;
  margin-left: 0.5rem;
}
</style>
