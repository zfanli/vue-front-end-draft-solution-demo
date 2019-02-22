<template>
  <div class="home">
    <page-title title="Home Page"/>
    <div>This is Home Page.</div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'

export default {
  name: 'home',
  components: {
    PageTitle,
  },
}
</script>
