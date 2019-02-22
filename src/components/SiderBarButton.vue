<template>
  <router-link class="sider-bar-button" :to="path">{{ title }}</router-link>
</template>

<script>
export default {
  props: {
    title: String,
    path: String,
  },
}
</script>

<style lang="scss" scoped>
.sider-bar-button {
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  background-color: #fff;
  width: 8rem;
  transition: all .1s linear;
  box-shadow: none;

  &:hover {
    color: #673ab7;
    box-shadow: 1px 1px 5px 0 #c2c3e0;
  }
}
</style>
