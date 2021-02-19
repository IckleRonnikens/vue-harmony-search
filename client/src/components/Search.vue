<template>
  <section id="search" class="search-section">
      <div class="container">
        <div class="search-section-inner clearfix">
          <div class="search bg-dark py-2">
              <h1>Search</h1><hr />
          </div>

          <div class="row">
            <div class="col-12">
              <b-form-input v-model="search" placeholder="Search via Title"></b-form-input><hr />
            </div>
          </div>

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
    name: 'Search',
    components: {

    },
    data () {
        return {
          instructionGuides: null,
            search: ''
        }
    },
    watch: {
        search (){
            const route = {
                name: 'search'
            }
            if (this.search !== ''){
                route.query = {
                    search:this.search
                }
            }
            this.$router.push(route);
        },
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