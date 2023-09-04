<template>  
Dashboard
</template>

<script>
export default {
  name: 'DashboardView',

  mounted(){
            console.log("getUserID:", this.$route.params.id)
        }

}
</script>
