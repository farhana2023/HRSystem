<template>
    <div>
        EmployeeDetail
    </div>
</template>

<script>
    export default {
        name:'EmployeeDetailView',
        mounted(){
            console.log("Employee ID:", this.$route.params.EmpID)
        }
        
    }
</script>

<style  scoped>

</style>