<template>
    <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4" style="border-radius: 1rem">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

            <div class="d-flex justify-content-center py-4">
              <a href="index.html" class="logo d-flex align-items-center w-auto">
                <img src="assets/img/favicon.png" alt="">
                <span class="d-none d-lg-block">StaffSpare</span>
              </a>
            </div><!-- End Logo -->

            <div class="card mb-3">

              <div class="card-body">

                <div class="pt-4 pb-2">
                  <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                  <p class="text-center small">Enter your username & password to login</p>
                </div>

                <form class="row g-3 needs-validation" novalidate>

                  <div class="col-12">
                    <label for="yourUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend">@</span>
                      <input type="text" name="username" class="form-control" id="yourUsername" required v-model="userName">
                      <div class="invalid-feedback">Please enter your username.</div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="yourPassword" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="yourPassword" required v-model="password">
                    <div class="invalid-feedback">Please enter your password!</div>
                  </div>

                  <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                      <label class="form-check-label" for="rememberMe">Remember me</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button   class="btn btn-secondary w-100 " type="submit" @click.prevent="onLoginClicked()">Login</button>
                  </div>
                  <div class="col-12">
                    <p class="small mb-0">Don't have account? <a href="#" @click="onDontHaveAccountClicked">Create an account</a></p>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>

    </section>


</template>

<script>
  import { useUserStore } from '../stores/user';

  export default {
    name: 'LoginView',
    data() {
      return {
        userName: 'farha.islam.1310@gmail.com',
        password: 'password'
      };
    },
    methods: {
      onLoginClicked() {
        console.log("U:",this.userName);
        console.log("P:",this.password);
        const success = this.userStore.loginUser(this.userName, this.password);
        console.log('success:',success);
        
        if(success) {
          this.$router.push({name: 'home'});
        }
      },
      onDontHaveAccountClicked() {
        this.$router.push({name: 'register'});
      },
    },
    setup() {
      const userStore = useUserStore();
      return { userStore };
    }
  }
</script>
