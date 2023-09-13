<template>


    <section class="section">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">Send Message</div>
          <div class="card-body pt-3">
    <form>
        <div class="row mb-3" >
                  <label for="sendtoEmail" class="col-md-4 col-lg-3 col-form-label">Send to Email</label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      readonly
                      name="sendtoEmail"
                      type="email"
                      class="form-control readonly-input"
                      id="sendtoEmail"
                      v-model="sendtoEmail"
                    />
                  </div>
                </div>

      <div class="row mb-3">
        <label for="sendtofullName" class="col-md-4 col-lg-3 col-form-label">Send To</label>
        <div class="col-md-8 col-lg-9">
          <input
          readonly
            name="sendtofullName"
            type="text"
            id="sendtofullName"
            class="form-control readonly-input"
            v-model="sendtofullName"
          />
        </div>
      </div>
    
      <div class="row mb-3">
        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Message Subject</label>
        <div class="col-md-8 col-lg-9">
          <input
            name="fullName"
            type="text"
            class="form-control"
            id="fullName"
            v-model="sendtoMsgSubject"
          />
        </div>
      </div>
    
      <div class="row mb-3">
        <label for="about" class="col-md-4 col-lg-3 col-form-label">Message Deatails</label>
        <div class="col-md-8 col-lg-9">
          <textarea
            name="about"
            class="form-control"
            id="about"
            style="height: 100px"
            v-model="sendtoMsgDetails"

          ></textarea>
        </div>
      </div>
    

      <div class="text-center">
        <button @click.prevent="sendMessage" type="submit" class="btn btn-secondary">
         Send message
        </button>
      </div>

  
      <div class="card-footer">
            <div v-if="dataSaved" class="alert alert-success mt-3">
              <Strong>Data saved successfully!</Strong>
            </div>
          </div>


    </form></div></div>
  </div></div>
  </section>
</template>



<script>
import { useUserStore } from '@/stores/user';
import { addSendtoEmp } from '@/services/empData'

export default {
  name: 'EmpSendMessageView',

  data() {
    return {
      sendFrom:[],
      userId: this.$route.params.id,
      sendtoEmail: this.$route.query.email,
      sendtofullName: this.$route.query.fullname, 
      sendtoMsgSubject: '',
      sendtoMsgDetails: '',
      sendFromEmail: '',
      sendFromUserID: '',
      Date: '',
      isMsgRead: false,
      dataSaved: false,
      dataError: false,
      message:''
    };
  },

  setup() {
  const empSendFromStore = useUserStore();
  console.log('empSendFromStore', empSendFromStore);
  console.log('empSendFromEmail', empSendFromStore.email);
  return {empSendFromStore};
},
methods: {
  async sendMessage() {
    const empSendMsgDetail = {
      sendToUserID:this.$route.query.id,
      sendToEmail: this.$route.query.email,
      sendToFullName: this.$route.query.fullname,

      sendToMsgSubject: this.sendtoMsgSubject,
      sendToMsgDetails: this.sendtoMsgDetails,

      sendFromEmail: this.empSendFromStore.email, // Access without "this"
      sendFromUserID: this.empSendFromStore.userId,
      sendFromFullName:this.empSendFromStore.fullName,

      MsgDate: new Date(),
      isMsgRead: false
    };
    console.log('empSendMsgDetail', empSendMsgDetail);

    try {
        await addSendtoEmp(empSendMsgDetail);

         this.dataSaved = true
        setTimeout(() => {
          this.dataSaved = false
          this.$router.push({name: 'emp_ListForSendMessageView'});
        }, 3000) // Display success message for 3 seconds

        // console.log('Document was created with ID', docRef.id)
      // 


      } catch (error) {
        console.error('Error updating employee data:', error);
        this.message = '';
       // dataError=true;
        this.errorMessage = 'Error updating employee data. Please try again.';
      }

  }
},


    
};
</script>


<style  scoped>

</style>