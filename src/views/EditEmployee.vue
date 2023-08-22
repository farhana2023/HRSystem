<template>
  <div>
    <!-- Other content -->

    <!-- Include the EmployeeList component -->
<HREmpView></HREmpView>
  </div>
</template>

<script>

import HREmpView from '@/components/HREmpView.vue'; // Update the path

export default {
  components: {
    HREmpView,
  },
  // Other setup and data properties
};
</script>
