<template>
  <div id="folkArt">
    <div class="content">
      <h2>民间美术</h2>
      <div class="description">
        民间美术是组成各民族美术传统的重要因素，为一切美术形式的源泉。新石器时代的彩陶艺术，中国战国秦汉的石雕、陶俑、画像砖石，其造型、风格均具鲜明的民间艺术特色；魏晋后，士大夫贵族成为画坛的主导人，但大量的版画、年画、雕塑、壁画则以民间匠师为主，而流行于普通人民之中的剪纸、农民画、刺绣、印染、服装缝制、风筝等更是直接来源于群众之手，并装饰、美化、丰富了社会生活，表达了人民群众的心理、愿望、信仰和道德观念，世代相沿且又不断创新、发展，成为富于民族乡土特色的优美艺术形式。
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
#folkArt {
  position: relative;
  width: 10rem;
  height: 6.5789rem;
  background: url('../assets/images/folkArt.png') no-repeat;
  padding-top: 0.5rem;
}

.content h2 {
  font-size: 0.1316rem;
}

.description {
  margin-top: 0.1316rem;
}

.videoBox {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  width: 5rem;
  height: 4rem;
  background-color: pink;
  border: 2px solid skyblue;
  box-sizing: content-box;
}
</style>
