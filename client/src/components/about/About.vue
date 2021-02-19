<template>
  <section id="about" class="about-section">
        <div class="blog-section-inner">
    <div class="container">
      <div class="about text-white py-2">
        <h1>About Handyman</h1><hr class="light" />
      </div>
    </div>

<div class="container">
<div class="row">
<div class="col-12 col-md-6 col-lg-3 mb-4" v-for="AboutService in aboutData" :key="AboutService.id">
    <div class="hovereffect">
         <img :src="AboutService.img" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
                <h2>{{AboutService.name}}</h2>
                <p>{{AboutService.title}}</p>
                <p>{{AboutService.info}}</p>
            </div>
    </div>
</div>
</div>
</div>    
          </div>
          

</section>
</template>

<script>
import AboutService from "@/services/AboutService";

export default {
    name: 'About',
    components: {
    },
    data () {
    return {
      aboutData: {
        name: "",
        title: "",
        info: "",
        img: ""
      }
    }
    },
      async mounted(){
        this.aboutData = (await AboutService.getAbout()).data
    }
}
</script>

<style scoped>

</style>
