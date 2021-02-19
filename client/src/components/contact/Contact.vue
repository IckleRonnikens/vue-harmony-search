<template>
  <section id="contact" class="contact-section">
        <div class="contact-section-inner">
    <div class="container">
      <div class="contact text-dark py-2">
        <h1>Contact Handyman</h1><hr />
      </div>
    </div>
  

<div class="container">
<div class="row">
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/mailbox.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
          <router-link to="/contact/contact-form" size="sm" class="p-2 btn btn-outline-light rounded-0">Contact Us Directly</router-link>
				
            </div>
    </div>
    
</div>
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/create_blog.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
          <router-link to="/contact/contact-details" size="sm" class="p-2 btn btn-outline-light rounded-0">View our details</router-link>
            </div>
    </div>
    
</div>
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/location.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
          <router-link to="/contact/contact-location" size="sm" class="p-2 btn btn-outline-light rounded-0">Handyman Location</router-link>
            </div>
    </div>
    </div>
</div>
</div>
</div>
          



</section>
</template>

<script>

export default {
    name: 'Contact',
    methods: {

    },
    components: {

    }
}
</script>

<style scoped>

</style>