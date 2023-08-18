<template>

  <HrNoFrame v-if="noFrame"></HrNoFrame>
  <HrFrame v-else></HrFrame>


</template>

<script>


import HrFrame from '@/components/HrFrame.vue'
import HrNoFrame from '@/components/HrNoFrame.vue'

const noFrameRoutes = ['/login', '/register'];


export default {
  name: 'App',
  components: {

    HrFrame,
    HrNoFrame
  },
  computed: {
    noFrame() {
        return noFrameRoutes.includes(this.$route.fullPath);
      }
  },

}
</script>
<style scoped></style>
