<template>
  <section>
    <form>
      <div class="row mb-3">
        <label for="fullName" class="col-md-4 col-lg-3 col-form-label">User Name</label>
        <div class="col-md-8 col-lg-9">
          <input
            name="fullName"
            type="text"
            class="form-control"
            id="fullName"
            v-model="UserName"
          />
        </div>
      </div>
      <div class="row mb-3">
        <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label>
        <div class="col-md-8 col-lg-9">
          <label class="form-label" for="customFile">Profile Image</label>
          <input type="file" class="form-control" id="customFile" ref="imageURL" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="Phone" class="col-md-4 col-lg-3 col-form-label">Phone</label>
        <div class="col-md-8 col-lg-9">
          <input name="phone" type="text" class="form-control" id="Phone" v-model="phone" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input
            type="email"
            name="email"
            class="form-control"
            id="yourEmail"
            required
            v-model="email"
          />
          <div class="invalid-feedback">Please enter a valid email address!</div>
        </div>
      </div>

      <div class="row mb-3">
        <input
          type="password"
          name="password"
          class="form-control"
          id="yourPassword"
          required
          v-model="password"
        />
        <div class="invalid-feedback">Please enter password!</div>
      </div>

      <div class="text-center">
        <button @click.prevent="CreateEmpAccount" type="submit" class="btn btn-secondary">
          create Account
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'HrEmpChildAccount',
  data() {
      return {
        email: null,
        password: null,
        UserName: null,
        
      };
    },

}
</script>

<style scoped></style>
