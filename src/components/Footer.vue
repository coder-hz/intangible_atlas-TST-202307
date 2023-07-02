<template>
  <footer class="footer">
    <img src="../assets/images/coin.png" alt="" class="coin" />
    <img src="../assets/images/money.png" alt="" class="money" />
    <div class="more">更多<span>精彩</span>即将上线</div>
    <p>敬请期待</p>
    <button>获取最新消息</button>
    <div>
      -----
      <h1><div class="logo"></div></h1>
      <router-link to="#">艺品纷呈</router-link>
    </div>
    -----
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  position: relative;
  width: 10rem;
  height: 5rem;
  padding: 0.5263rem;
  box-sizing: border-box;
  text-align: center;
  background: linear-gradient(180deg, rgba(253, 169, 168, 1) 0%, rgba(78, 53, 142, 1) 100%);
}

.footer .coin {
  display: inline-block;
  width: 1.3289rem;
  height: 1.3289rem;
}

.footer .money {
  position: absolute;
  top: -0.9rem;
  left: 3rem;
  width: 3.5rem;
  height: 3.5rem;
}

.footer .more {
  font-size: 0.2632rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-top: 0.1974rem;
}

.more span {
  color: skyblue;
}

.footer p {
  font-size: 0.1184rem;
}

.footer button {
  width: 1.3947rem;
  height: 0.25rem;
  margin-top: 0.1rem;
  font-size: 0.14rem;
  background: rgba(208, 103, 103, 0.79);
  border-radius: 0.125rem;
}

.footer .logo,
.footer .logo a {
  display: inline-block;
  /* 为了在一行显示 不能设置块级元素 */
}

.footer .logo a {
  background-size: 100%;
}
</style>
