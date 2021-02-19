<template>
<section id="home" class="header-section" :style="{ backgroundImage: 'url(' + require('@/assets/images//header.jpg') + ')' }">


    <div class="overlay">
        <div class="header-section-inner">
            <h1 style="background:fixed">Numbthumbz</h1>
                <h2>Simple Game Reviews</h2><br />
                    <router-link to="/guides" size="sm" class="btn btn-outline-light ml-2 my-sm-0 rounded-0">Get Started</router-link>             
        </div>
    </div>
    
      

</section>
</template>

<script>





export default {
  name: 'index',
  components: {

}
}
</script>

<style scoped>



</style>
