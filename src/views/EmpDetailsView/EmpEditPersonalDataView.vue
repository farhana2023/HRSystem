<template>
  <section>
    <form>
        <div class="row mb-3 pt-4">
        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Eidt Profile Image</label>
        <div class="col-md-8 col-lg-9">
            <input type="file" class="form-control" id="customFile" />
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
        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">User Name</label>
        <div class="col-md-8 col-lg-9">
          <input
            name="DisplayName"
            type="text"
            class="form-control"
            id="DisplayName"
            v-model="DisplayName"
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="about" class="col-md-4 col-lg-3 col-form-label">About</label>
        <div class="col-md-8 col-lg-9">
          <textarea
            name="about"
            class="form-control"
            id="about"
            style="height: 100px"
            v-model="about"
          ></textarea>
        </div>
      </div>
      <div class="row mb-3">
        <label for="Address" class="col-md-4 col-lg-3 col-form-label">Address</label>
        <div class="col-md-8 col-lg-9">
          <input name="address" type="text" class="form-control" id="Address" v-model="address" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="Country" class="col-md-4 col-lg-3 col-form-label">Country</label>
        <div class="col-md-8 col-lg-9">
          <input name="country" type="text" class="form-control" id="Country" v-model="country" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
        <div class="col-md-8 col-lg-9">
          <input name="phone" type="text" class="form-control" id="Phone" v-model="phone" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
        <div class="col-md-8 col-lg-9">
          <input name="email" type="email" class="form-control" id="Email" v-model="email" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="company" class="col-md-4 col-lg-3 col-form-label">Gender</label>
        <div class="col-md-8 col-lg-9">
          <select v-model="selectedGender" class="form-select" aria-label="Default select example">
            <option selected>Select Gender</option>
            <option v-for="(label, value) in genderOptions" :value="value" :key="value">
              {{ label }}
            </option>
          </select>
        </div>
      </div>

      <div class="text-center">
        <button @click.prevent="sendEmpPersonalData" type="submit" class="btn btn-secondary">
        Save Data
        </button>
      </div>
    </form>
  </section>
</template>

<script>
    export default {
       name:'EmpEditPersonalData' ,
    }
</script>

<style  scoped>

</style>