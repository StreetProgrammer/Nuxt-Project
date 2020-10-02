<template>
  <div class="container">
    <form @submit.prevent="goLogin" class="form-signin" style="flex: 90%">
      <h1 class="h3 mb-3 font-weight-normal text-center">
        Please sign in {{ $auth.user }}
      </h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        v-model="loginForm.email"
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        v-model="loginForm.password"
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
      />
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        Sign in
        <span v-if="loginLoading">
          <font-awesome-icon icon="circle-notch" class="fa-spin" />
        </span>
      </button>
      <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
    </form>
  </div>
</template>

<script>
export default {
  auth: "guest",
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      loginErrors: null,
      loginLoading: false
    };
  },
  methods: {
    async goLogin() {
      console.log("clicked");
      this.loginLoading = true;
      try {
        await this.$auth.loginWith("local", {
          data: this.loginForm
        });
        this.loginLoading = false;
        // this.prepareRedirectAfterLogin();
        console.log(this.$auth.user);
      } catch (e) {
        this.loginLoading = false;
        this.loginErrors = e;
      }
    }
    // prepareRedirectAfterLogin() {
    //   const user = this.$auth.user;
    //   const router = this.$router;
    //   if (user.email_verified_at == null) {
    //     console.log("go to verify email");
    //     router.push("/register/step3");
    //   } else {
    //     console.log("go to check other things");
    //     router.push("/dashboard");
    //   }
    // }
  }
};
</script>

<style lang="scss"></style>
