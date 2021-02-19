<template>
  <section id="guides" class="guides-section">
    <div class="guides-section-inner">
    <div class="guides bg-dark py-2">
      <div class="container">
        <h1>Handyman Guides</h1><hr />
      </div>
    </div>

<div class="container">
<div class="row">
<div class="col-3 mb-4" v-for="instructionGuide in instructionGuides" :key="instructionGuide.id">
    <div class="hovereffect">
         <img :src="instructionGuide.image" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
                <h2>{{instructionGuide.title}}</h2>
				<p>
					<router-link :to="'/guides/view/' + instructionGuide.id" class="p-2 btn btn-outline-light rounded-0">View Instructions</router-link>
				</p>
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