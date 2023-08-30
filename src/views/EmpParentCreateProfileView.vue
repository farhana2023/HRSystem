<template>
    <section class="section">
      <div class="row">
        <div class="col-lg-8">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Employee Profile</h5>

              <!-- Default Accordion -->
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" fdprocessedid="g9lqeq">
                        <strong> Personal Information</strong> 
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style="">
                    <div class="accordion-body">
                     <HrEmpChildPersonal></HrEmpChildPersonal>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" fdprocessedid="bixyv8">
                        <strong> Additional Information</strong> 
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style="">
                    <div class="accordion-body">
                        <HrEmpChildAdditionl></HrEmpChildAdditionl>
                    </div>
                  </div>
                </div>
       
              </div><!-- End Default Accordion Example -->

            </div>
          </div>

        </div>

    
      </div>
    </section>

</template>

<script>
import HrEmpChildPersonal from '@/components/HrEmpChildPersonal.vue'; 
import HrEmpChildAdditionl from '@/components/HrEmpChildAdditionl.vue'; 

    export default {
       name: 'EmpParentCreateProfileView' ,
       components:{
        HrEmpChildPersonal,
        HrEmpChildAdditionl
       }
    }
</script>

<style  scoped>

</style>