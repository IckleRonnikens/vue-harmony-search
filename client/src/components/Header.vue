<template>
<div>
<Navbar />

<app-footer />
</div>
</template>

  <script>
import Navbar from '@/components/Navbar'
import AppFooter from '@/components/Footer.vue'
  export default {
    name: 'Header',

    components: {
    Navbar,
    AppFooter
    }
  }
  </script>

<style scoped>

  </style>
