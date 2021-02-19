<template>
  <section id="edit-blog" class="edit-blog-section">
    <div class="edit-blog-section-inner">
    <div class="edit-blog bg-dark py-2">
      <div class="container">
        <h1>Edit Guides:</h1><hr />
      </div>
    </div>

<div class="container">
   
<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">Category</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody v-for="instructionGuide in instructionGuides" :key="instructionGuide.id">
    <tr>
      <th scope="row">{{instructionGuide.id}}</th>
      <td>{{instructionGuide.title}}</td>
      <td>{{instructionGuide.author}}</td>
      <td>{{instructionGuide.category}}</td>
      <td><router-link :to="'/guides/' + instructionGuide.id +'/edit'" class="mr-2 w-100 text-white">Link</router-link></td>
    </tr>
  </tbody>
</table>
          
          
</div>
</div>
</section>
</template>
<script>

import InstructionGuideService from '@/services/InstructionGuideService'


export default {
    name: 'EditGuides',
    methods: {

    },
    components: {

    },
    data () {
        return {
            instructionGuides: null,

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