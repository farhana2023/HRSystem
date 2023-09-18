<template>
    <div>

        <!-- <HrEmpAllList :lstEmployees="lstEmployees"></HrEmpAllList> -->

        <HrEmpAllList></HrEmpAllList>
    </div>


<main id="main" class="main">


</main>
</template>



<script>
// import { getAllLstEmployee } from '@/services/empData';
import HrEmpAllList from '@/components/Admin/HrEmpAllList.vue'


export default {
        name:'EmpAllLstView',

        components:{
          HrEmpAllList
        }

        
    }



</script>

<style  scoped>

</style>