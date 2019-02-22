<template>
  <div class="error-box">{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: String,
  }
}
</script>

<style lang="scss" scoped>
.error-box {
  color: red;
  height: 1rem;
  margin: 1rem 0;
}
</style>
