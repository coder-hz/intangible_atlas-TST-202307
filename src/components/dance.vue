<template>
  <div id="folkDance">
    <h2>民间舞蹈</h2>
    <div class="videoBox">
      <video src="" controls muted></video>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#folkDance {
  width: 10rem;
  height: 6.5789rem;
  text-align: center;
  background-color: #fff;
  padding-top: 0.2rem;
}

#folkDance h2 {
  font-size: 0.3316rem;
}

#folkDance .videoBox {
  float: none;
  margin: 0.3289rem auto;

  background-color: pink;
  border: 2px solid red;
}
#folkDance .videoBox video {
  padding: 50px;
}
</style>
