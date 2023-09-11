<template>
  <section>
    <form>
        <div class="row mb-3">
                  <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                  <div class="col-md-8 col-lg-9">
                    <input
                      readonly
                      name="email"
                      type="email"
                      class="form-control readonly-input"
                      id="email"
                      v-model="email"
                    />
                  </div>
                </div>

      <div class="row mb-3">
        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Full Name</label>
        <div class="col-md-8 col-lg-9">
          <input
            name="fullName"
            type="text"
            class="form-control"
            id="fullName"
            v-model="fullName"
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
            v-model="MsgSubject"
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
            v-model="Message"
          ></textarea>
        </div>
      </div>
    

      <div class="text-center">
        <button @click.prevent="sendMessage" type="submit" class="btn btn-secondary">
      Send message
        </button>
      </div>
    </form>
  </section>
</template>

<script>
    export default {
        name:'EmpSendMessageView'

        
    }
</script>

<style  scoped>

</style>