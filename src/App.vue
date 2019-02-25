<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-menu
          :router="true"
          :default-active="$route.path"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- Home link -->
          <el-menu-item index="/">Home</el-menu-item>

          <!-- Demo link -->
          <el-menu-item-group title="Demo">
            <el-menu-item index="/payment">支払実績管理</el-menu-item>
          </el-menu-item-group>

          <!-- Fill buttons -->
          <el-menu-item-group v-for="(cat, index) in categories" :key="index" :title="cat.name">
            <el-menu-item
              :index="`/${index + 1}-${idx + 1}`"
              v-for="(but, idx) in cat.buttons"
              :key="idx"
            >{{ but.title }}</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>

      <!-- Main panel -->
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    // Edit test buttons for fill sider menu panel
    let categories = []
    for (let i = 0; i < 2; i++) {
      let buttons = []
      for (let idx = 0; idx < ((i % 2) + 1) * 2 - (i % 2); idx++) {
        buttons[idx] = {
          // Button name: Button n-n
          title: `Button ${i + 1}-${idx + 1}`,
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
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;

  .el-aside {
    // height: 100vh;

    .el-menu {
      height: 100vh;
      overflow-y: auto;
    }
  }

  .el-main {
    display: flex;
    justify-content: center;
  }
}
</style>
