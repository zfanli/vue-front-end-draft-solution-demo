<template>
  <div class="container-box-mr">
    <!-- For align contents at flex mode, -->
    <!-- place contntes to the right edge. -->
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.container-box-mr {
  margin-left: auto;
}
</style>
