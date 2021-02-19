<template>
  <section id="guides" class="guides-section">
        <div class="guides-section-inner">
    <div class="container">
      <div class="guides text-white py-2">
        <h1>Error</h1><hr class="light" />
      </div>
    </div>
  

<div class="container">
<div class="row">
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/four.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
          <router-link to="/" size="sm" class="p-2 btn btn-outline-light rounded-0">PAGE</router-link>
            </div>
    </div>
    
</div>
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/zero.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
          <router-link to="/" size="sm" class="p-2 btn btn-outline-light rounded-0">NOT</router-link>
            </div>
    </div>
    
</div>
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/4.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
          <router-link to="/" size="sm" class="p-2 btn btn-outline-light rounded-0">FOUND</router-link>
            </div>
    </div>
    
</div>
</div><hr />
  <div class="row">
    <div class="col-12 align-center">
      <h3>Sorry, but that page does not exist.<br /> Please try again... <br /> Try performing a search of the content on this website <router-link to="/search" size="sm" class="">here</router-link>.</h3>
    </div>
  </div>
</div>
</div>
     

</section>
</template>

<script>

export default {
    name: 'NotFound',
    methods: {

    },
    components: {


    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>

</style>