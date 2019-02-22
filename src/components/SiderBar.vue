<template>
  <div class="sider-bar">
    <sider-bar-button title="Home" path="/"/>
    <div class="cat">
      <div class="cat-header">Demo</div>
      <sider-bar-button title="支払実績管理" path="/payment"/>
    </div>
    <div class="cat" v-for="cat in categories" :key="cat.name">
      <div class="cat-header">{{ cat.name }}</div>
      <sider-bar-button v-for="b in cat.buttons" :key="b.title" :title="b.title" :path="b.path"/>
    </div>
  </div>
</template>

<script>
import SiderBarButton from '@/components/SiderBarButton.vue'

export default {
  data() {
    let categories = []
    for (let i = 0; i < 2; i++) {
      let buttons = []
      for (let idx = 0; idx < ((i % 2) + 1) * 2 - (i % 2); idx++) {
        buttons[idx] = {
          title: `Button ${i + 1}-${idx + 1}`,
          path: '/',
        }
      }

      categories[i] = {
        name: `Category ${i + 1}`,
        buttons,
      }
    }

    return {
      categories,
    }
  },
  components: {
    SiderBarButton,
  },
}
</script>

<style lang="scss" scoped>
.sider-bar {
  height: 100vh;
  width: 200px;
  background-color: rgb(231, 232, 253);
  flex-shrink: 0;
  padding: 0 1rem;
  padding-bottom: 1rem;
  overflow-y: auto;

  .cat-header {
    margin-top: 1.5rem;
    border-bottom: 1px solid #673ab7;
    line-height: 2rem;
  }
}
</style>
