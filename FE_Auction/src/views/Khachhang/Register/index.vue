<template>
  <!-- Background chính với gradient và triangles -->
  <div class="login-background">
    <!-- Triangle shapes positioned like in the image -->
    <div class="triangle-1"></div>
    <div class="triangle-2"></div>
    <div class="triangle-3"></div>
    <div class="triangle-5"></div>
    <div class="triangle-6"></div>
    <div class="triangle-7"></div>
    <div class="triangle-8"></div>
    <div class="triangle-9"></div>

    <!-- Nội dung chính -->
    <div class="container container-acc">
      <div class="row d-flex justify-content-around">
        <div class="col-lg-5 col-md-5 d-flex flex-column">
          <div class="d-flex gap-3 align-items-center mb-auto">
            <img src="../../../assets/img/Logo_AA.png" class="logoLogin" alt="">
            <h3 class="fw-bold m-0"><span class="text-success fw-bold ">Art</span>Auction</h3>
          </div>
          <div class="py-5 my-5">
            <h1 class="text-acc pb-2">Let’s get started !</h1>
            <div class="border border-3 w-75 border-success rounded mb-5"></div>
            <p class="left mb-5  py-3">Becoming a member is the first step toward owning pieces that truly
              inspire, opening the
              door to
              new experiences and meaningful connections.</p>
          </div>
        </div>
        <div class="col-lg-5 col-md-7">
          <div class="card card-acc">
            <div class="card-body p-5">
              <!-- form -->
              <div class="d-flex flex-column gap-2">
                <h3 class="text-center text-success fw-bold mb-4">Sign Up</h3>
                <div class="d-flex flex-column gap-3">
                  <!-- Username -->
                  <div class="group-input col-lg-12 col-md-12">
                    <input type="text" class="form-control" id="username" v-model="user.username" required>
                    <label for="username">Username</label>
                    <i class="bi bi-person fa-xl text-success"></i>
                  </div>
                  <!-- Email -->
                  <div class="group-input col-lg-12 col-md-12">
                    <input type="email" class="form-control" id="email" v-model="user.email" required>
                    <label for="email">Email</label>
                    <i class="bi bi-envelope fa-xl text-success"></i>
                  </div>
                  <!-- Password -->
                  <div class="group-input col-lg-12 col-md-12">
                    <input :type="showPassword ? 'text' : 'password'" class="form-control" id="password"
                      v-model="user.password" required>
                    <label for="password">Password</label>
                    <i class="bi fa-xl" :class="showPassword ? 'bi-eye' : 'bi-eye-slash'" @click="togglePassword"
                      style="cursor: pointer;"></i>
                  </div>
                  <!-- RePassword -->
                  <div class="group-input col-lg-12 col-md-12">
                    <input :type="showRePassword ? 'text' : 'password'" class="form-control" id="repassword"
                       required>
                    <label for="repassword">RePassword</label>
                    <i class="bi fa-xl" :class="showRePassword ? 'bi-eye' : 'bi-eye-slash'" @click="toggleRePassword"
                      style="cursor: pointer;"></i>
                  </div>
                </div>

                <!-- Terms & Conditions -->
                <div class="form-check">
                  <input class="form-check-input border border-success" type="checkbox" id="terms" v-model="acceptTerms"
                    required>
                  <label class="form-check-label text-muted" for="terms">
                    I agree to the <a href="#" class="text-success text-decoration-none">Terms &
                      Conditions</a>
                  </label>
                </div>

                <div class="d-flex flex-column align-items-center gap-3 mt-2">
                  <button class="btn btn-success fw-bold w-100" @click="DangKy()">Sign Up</button>

                  <!-- Divider -->
                  <!-- <div class="d-flex align-items-center w-100">
                    <hr class="flex-grow-1 border border-success">
                    <span class="px-3 text-muted">or</span>
                    <hr class="flex-grow-1 border border-success">
                  </div> -->

                  <!-- Google Register Button -->
                  <!-- <button
                    class="btn btn-google border-2 border-success w-100 d-flex align-items-center justify-content-center gap-2"
                    @click="registerWithGoogle">
                    <i class="fab fa-google"></i>
                    <span>Continue with Google</span>
                  </button> -->

                  <p class="m-0">Already have an account?
                    <router-link to="/login" href="#" class="text-success fw-bold text-decoration-none">Sign
                      In</router-link>
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      showPassword: false,
      showRePassword: false,
      acceptTerms: false,
      user:{

      }
    }
  },
  mounted() {
    // Component mounted
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },

    toggleRePassword() {
      this.showRePassword = !this.showRePassword;
    },

    DangKy() {

      // Call API to register user
      axios.post('http://localhost:8081/register', this.user)
        .then(response => {
          console.log(response.data);
          alert("Registration successful!");
          this.$router.push('/login'); // Redirect to login page after successful registration
        })
        .catch(error => {
          console.error(error);
          alert("Registration failed. Please try again.");
        });
    },

    registerWithGoogle() {
      // Google Register method
      console.log('Register with Google clicked');
      // TODO: Implement Google OAuth
    }
  }
}
</script>
<style></style>
