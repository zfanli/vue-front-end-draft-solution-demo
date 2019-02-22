<template>
  <button class="page-title-button">
    <slot/>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-title-button {
  flex-shrink: 0;
  flex-grow: 0;
  height: 1.5rem;
  margin-right: 1rem;
  padding: 0 0.5rem;
  cursor: pointer;
  background-color: #e7e8fd;
  transition: all .1s linear;
  border: none;
  outline: none;

  &:hover {
    color: #673ab7;
    box-shadow: 1px 1px 5px 0 #c2c3e0;
  }
}
</style>


