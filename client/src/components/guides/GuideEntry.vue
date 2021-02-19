<template>
  <section class="guides-section" >
        <div class="guides-section-inner">
          <div class="container">
            <div class="guides text-white py-2" >
              <h1>{{instructionGuide.title}}</h1><hr />
            </div>

    <div class="row">
      <div class="col-4">
            <p>Author</p><hr />
            <h2>{{instructionGuide.author}}</h2>
      </div>

      <div class="col-4">
            <p>Author</p><hr />
            <h2>{{instructionGuide.category}}</h2>
      </div>

      <div class="col-4">
            <p>Equipment: </p><hr />
            <h2>{{instructionGuide.equipment}}</h2>
      </div>
    </div>
<hr />
    <div class="row">
      <div class="col-4">
        <img :src="instructionGuide.image" :alt="instructionGuide.title" class="img-fluid rounded shadow">
      </div>

      <div class="col-8">
            <h3>Instructions: </h3>{{instructionGuide.instructions}}<br>      
      </div>
    </div>
<hr />
    <div class="row">
      <div class="col-4 mt-4">
        <router-link :to="'/guides/' + instructionGuide.id +'/edit'" class="mr-2 w-100 btn btn-outline-success rounded-0">Edit</router-link>
      </div>
      <div class="col-4 mt-4">
        <button @click="deleteInstructionGuide" class="mr-2 w-100 btn btn-outline-danger rounded-0">Delete</button>
      </div>
      <div class="col-4 mt-4">
        <router-link :to="'/guides/view'" class="mr-2 w-100 btn btn-outline-light rounded-0">View More Guides</router-link>
      </div>
    </div>
     </div>
</div>


</section>
</template>


<script>


import InstructionGuideService from "@/services/InstructionGuideService";

export default {
    name: "GuideEntry",
    components: {

    },
    data (){
        return {
            instructionGuide: {
              title: '',
              author: '',
              category: '',
              catimg: '',
              image: '',
              equpiment: '',
              instructions: ''
            }
        }
    },
    async mounted(){
        const instructionGuideId = this.$store.state.route.params.instructionGuideId
        this.instructionGuide = (await InstructionGuideService.getInstructionGuideById(instructionGuideId)).data
    },
  methods: {
    async deleteInstructionGuide () {
      
      // Posts data
      try {
        const instructionGuideId = this.$store.state.route.params.instructionGuideId
        await InstructionGuideService.deleteInstructionGuides(instructionGuideId)
        this.$router.push({name: 'guides'})
      } catch (error) {
         //console.log(error) 
      }
    }
}
}
</script>

<style scoped>

</style>