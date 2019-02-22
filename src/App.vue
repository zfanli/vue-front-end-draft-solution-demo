<template>
  <div id="app">
    <sider-bar/>
    <div class="main-body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SiderBar from '@/components/SiderBar.vue'

export default {
  components: {
    SiderBar,
  },
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;

  .main-body {
    padding: 1rem;
    flex-grow: 1;
    flex-shrink: 0;
    height: 100vh;
    text-align: left;
  }
}
</style>
