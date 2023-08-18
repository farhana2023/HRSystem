<template>
  <HrHeader></HrHeader>
  <HrNavigation></HrNavigation>
  <main id="main" class="main">
    <HrBreadcrumb></HrBreadcrumb>
    {{ $route.fullPath }}
    is Login: {{ isloginPage }}

    <RouterView />
  </main>

  <HrFooter></HrFooter>

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"
    ><i class="bi bi-arrow-up-short"></i
  ></a>
</template>

<script>
import { RouterView } from 'vue-router'
import HrHeader from '@/components/HrHeader.vue'
import HrNavigation from '@/components/HrNavigation.vue'
import HrFooter from '@/components/HrFooter.vue'
import HrBreadcrumb from '@/components/HrBreadcrumb.vue'

export default {
  name: 'HrFrame',
  components: {
    RouterView,
    HrHeader,
    HrNavigation,
    HrBreadcrumb,
    HrFooter
  }
}
</script>

<style scoped></style>
