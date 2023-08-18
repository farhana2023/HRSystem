<template>
  <main>
    <div class="container">
        <RouterView />
    </div>
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  name: 'HrNoframe',
  components: {
    RouterView,
  }
}
</script>

<style scoped></style>
