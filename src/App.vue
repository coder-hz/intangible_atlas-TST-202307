<template>
  <div id="app">
    <Header></Header>
    <Menu></Menu>
    <div class="view"><router-view></router-view></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Menu from './components/menu.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Menu,
    Footer
  },
  created() {},
  data() {
    return {
      clientWidth: document.body.clientWidth
    }
  },
  mounted() {
    let that = this
    window.addEventListener('resize', () => {
      return (() => {
        window.clientWidth = document.body.clientWidth
        that.clientWidth = window.clientWidth
      })()
    })
  },
  watch: {
    clientWidth: {
      handler(newVal) {
        document.documentElement.style.fontSize = newVal / 10 + 'px'
      },
      immediate: true
    }
  },
  methods: {}
}
</script>

<style>
.videoBox {
  width: 5rem;
  height: 5rem;
  padding: 0.3rem;
}
.content {
  width: 2rem;
  height: 1.9737rem;
  padding: 0.1rem;
  font-size: 0.0921rem;
  padding-left: 0.6579rem;
}
</style>
