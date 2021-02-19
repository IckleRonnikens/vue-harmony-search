<template>
<div><Navbar></Navbar>
  <section id="contact" class="contact-section">
        <div class="contact-section-inner">
    <div class="container">
      <div class="contact text-dark py-2">
        <h1>Details</h1><hr />
      </div>
    </div>
  

<div class="container">
        <div class="row text-white">
          <div class="col-md-4">
            <h2>Opening Hours</h2><hr />

            <p>Normal hours-:</p>
            <p>Monday to Friday: 8.30am - 5pm</p>
            <p>Saturday to Sunday: 10am - 3pm</p><br />

            <p>Holiday hours-:<p>
            <p>Monday to Friday: 9am - 12pm</p>
            <p>Saturday to Sunday: Closed</p>            
            



          </div>
          <div class="col-md-4">
            <h2>Postal address</h2><hr />
            <p>PO Box 42<br />
Holmesglen, Victoria<br />
Australia 3148</p>

          </div>
          <div class="col-md-4">
            <h2>FAQ</h2><hr />


            <p>How do I become a Handyman?</p><hr />

          </div>
        </div>
</div>
</div>
          



</section>
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'Contact',
    methods: {

    },
    components: {
      Navbar
}
}
</script>

<style scoped>

</style>