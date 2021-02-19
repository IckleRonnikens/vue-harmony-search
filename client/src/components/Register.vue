<template>
  <section id="register" class="register-section">
      <div class="container w-50">
        
        <div class="register-section-inner">
          <div class="register bg-dark py-2">
              <h1>Register</h1><hr />
          </div>

        <form name="register" autocomplete="off" class="text-left mt-3">

      <b-form-group id="author-group" label="Email:" label-for="email" class="text-white" description="Please enter your email">
          <b-form-input type="email" name="email" placeholder="email" autocomplete="new-password" v-model="email" class="mb-3"></b-form-input>
      </b-form-group>

      <b-form-group id="author-group" label="Password:" label-for="password" class="text-white" description="Please enter your password">
          <b-form-input type="password" name="password" placeholder="password" autocomplete="new-password" v-model="password"></b-form-input>
      </b-form-group>

          <b-card-text v-html="error" class="error mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          <b-button variant="outline-light" class="w-100 block rounded-0" @click="register">Register</b-button>
        </form>

      </div>
    </div>
  </section>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: 'test@test.com',
      password: 'password',
     
      error: null
    }
  },
  methods: {
    async register () {
      
      try {
        const responce = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        
        this.$store.dispatch('setToken', responce.data.token)
        this.$store.dispatch('setUser', responce.data.user)
        this.$router.push({name: 'index'})
      } catch (error) {
        
        this.error = error.response.data.error
      }
    }
  }
}
</script>


<style scoped>

</style>