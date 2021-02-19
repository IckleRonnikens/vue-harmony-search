<template>
<div>

  <b-navbar toggleable="lg" fixed="top" type="dark" >
    <b-navbar-brand href="/">HMS Harmony</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="nav-background">
      <b-navbar-nav>
    <router-link to="/about"  size="sm" class="btn btn-outline-light mr-2 my-sm-0 rounded-0">About</router-link>
    <router-link to="/blog" size="sm" class="btn btn-outline-light mr-2 my-sm-0 rounded-0">Blog</router-link>
    <router-link to="/guides" size="sm" class="btn btn-outline-light mr-2 my-sm-0 rounded-0">Guides</router-link>
    <router-link to="/contact" size="sm" class="btn btn-outline-light mr-2 my-sm-0 rounded-0">Contact</router-link>
    <router-link to="/search" size="sm" class="btn btn-outline-light mr-2 my-sm-0 rounded-0">Search</router-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

    <router-link v-if="!$store.state.isUserLoggedIn" to="/login" size="sm" class="btn btn-outline-light mr-2 rounded-0">Login</router-link>
    <router-link v-if="!$store.state.isUserLoggedIn" to="/register" size="sm" class="btn btn-outline-light mr-2 rounded-0">Register</router-link>
    <button v-if="$store.state.isUserLoggedIn" @click="logout" size="sm" class="btn btn-outline-danger rounded-0">Log out</button>



      </b-navbar-nav>
    </b-collapse>
  </b-navbar>


</div>
</template>

<script>

import InstructionGuideService from '@/services/InstructionGuideService'
import AuthenticationService from '@/services/AuthenticationService'

export default {
    name: 'Navbar',
  data () {
    return {
      email: 'test@test.com',
      password: 'password',

      error: null
    }
  },
    components: {
      // Search
    },
    watch: {
      '$route.query.search' :{
        immediate: true,
        async handler (value) {
          this.instructionGuides = (await InstructionGuideService.getInstructionGuides(value)).data
            }
            
        }
    },
        methods: {
      logout() {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)

      }
    },

        async login () {

      try {
        const responce = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', responce.data.token)
        this.$store.dispatch('setUser', responce.data.user)
      } catch (error) {

        this.error = error.response.data.error
      }
    }
}
</script>

<style>
@media only screen and (max-width: 600px) {
.nav-background {
    background-color: #343a40;
  }
}
</style>