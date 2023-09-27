<template>
  <section class="section">
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-header Color">Create New Employee Account</div>
          <div class="card-body pt-4">
            <form>
              <div class="row mb-3">
                <label for="Email" class="col-md-4 col-lg-3 col-form-label">Email</label>
                <div class="col-md-8 col-lg-9">
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    id="Email"
                    v-model="email"
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="password" class="col-md-4 col-lg-3 col-form-label">Password</label>
                <div class="col-md-8 col-lg-9">
                  <input
                    name="password"
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                  />
                </div>
              </div>

       
            </form>
          </div>

          <div class="card-footer">

            <div class="text-center">
                <button
                  @click.prevent="registerUserClicked"
                  type="submit"
                  class="btn btn-primary"
                >
                  create Account
                </button>
              </div>
            <div v-if="dataSaved" class="alert alert-success mt-3  pt-4">
              <Strong>Data saved successfully!</Strong>
            </div>

            <div v-if="registrationError" class="alert alert-danger mt-3">
              <strong>Error:</strong> {{ registrationError }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useUserStore } from '../stores/user'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'EmpCreateAccountView',
  data() {
    return {
      email: null,
      password: null,
      userName: null,
      registrationSuccess: false,
      registrationError: null,
      id: null
    }
  },
  methods: {
    async registerUserClicked() {
      try {
        const auth = getAuth()
        const cred = await createUserWithEmailAndPassword(auth, this.email, this.password)
        if (cred.user) {
          console.log('uid:', cred.user.uid)
          console.log('password:', cred.user.email)

          this.$router.push({
            name: 'emp-Create-Profile',
            query: {
              id: cred.user.uid,
              email: cred.user.email
            }
          })

          // Update the user's display name
          // await updateProfile(cred.user, {
          //   displayName: this.userName,
          // });

          // Set registration success to true
          this.registrationSuccess = true
        } else {
          console.error('User not created')
        }
      } catch (error) {
        console.error('Error during registration:', error)
        this.registrationError = error.message;

      }
    }
  },
  setup() {
    const userStore = useUserStore()
    return { userStore }
  }
}
</script>

<style scoped>
.Color {
  background-color:  #6082B6;
  color: white;
  font-weight: bold;
}
</style>
