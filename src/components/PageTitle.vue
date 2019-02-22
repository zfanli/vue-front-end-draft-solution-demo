<template>
  <div class="page-title">
    <h1 class="page-title-head">{{ title }}</h1>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style lang="scss" scoped>
.page-title {
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0 0 #333;
  margin-bottom: 2rem;

  .page-title-head {
    display: block;
  }
}
</style>

