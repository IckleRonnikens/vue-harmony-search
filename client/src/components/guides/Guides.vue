<template>
  <section id="guides" class="guides-section">
        <div class="guides-section-inner">
    <div class="container">
      <div class="guides text-white py-2">
        <h1>Handyman Instruction Guides</h1><hr class="light" />
      </div>
    </div>
  

<div class="container">
<div class="row">
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/create_guide.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
          <router-link to='/guides/create' replace size="sm" class="p-2 btn btn-outline-light rounded-0">Create Instruction Guide</router-link>	
            </div>
    </div>
    
</div>
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/view_guide.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
          <router-link to="/guides/edit" size="sm" class="p-2 btn btn-outline-light rounded-0">Edit Instruction Guides</router-link>
            </div>
    </div>
    
</div>
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/view_instruction.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
          <router-link to="/guides/view" size="sm" class="p-2 btn btn-outline-light rounded-0">View Instruction Guides</router-link>
            </div>
    </div>
    
</div>
</div>
</div>
</div>
     

</section>
</template>

<script>
import InstructionGuideService from '@/services/InstructionGuideService'
export default {
    name: 'Guides',
    methods: {

    },
    components: {


    },
    data () {
        return {
            instructionGuides: null
        }
    },
    watch: {
      '$route.query.search' :{
        immediate: true,
        async handler (value) {
          this.instructionGuides = (await InstructionGuideService.getInstructionGuides(value)).data
            }
        }
    }
}
</script>

<style scoped>

</style>