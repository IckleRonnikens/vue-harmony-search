<template>
  <section class="edit-instruction-guide-section">
      <div class="container w-50">
        
        <div class="edit-instruction-guide-section-inner">
          <div class="edit-instruction-guide bg-dark py-2">
              <h1>Edit Instruction Guide</h1><hr />
          </div>

         <b-form>
            <div class="row">

              <div class="col-6">
                <b-form-group id="title-group" label="Title:" label-for="title" description="Please enter a appropriate title for your instruction guide">
                  <b-form-input id="title" type="text" required placeholder="Enter Title" v-model="$v.instructionGuide.title.$model" :state="$v.instructionGuide.title.$dirty ? !$v.instructionGuide.title.$error : null" aria-describedby="title-feedback"></b-form-input>
                  <b-form-invalid-feedback id="title-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
              </div>

              <div class="col-6">
                <b-form-group id="author-group" label="Author:" label-for="author" description="Please enter your name">
                  <b-form-input id="author" type="text" required placeholder="Enter Author" v-model="$v.instructionGuide.author.$model" :state="$v.instructionGuide.author.$dirty ? !$v.instructionGuide.author.$error : null" aria-describedby="author-feedback"></b-form-input>
                  <b-form-invalid-feedback id="author-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
              </div>
            </div>

            <div class="row">

              <div class="col-6">
                <b-form-group id="category-group" label="Category:" label-for="category" description="Please enter an appropriate category">
                  <b-form-input id="category" type="text" required placeholder="Enter Category" v-model="$v.instructionGuide.category.$model" :state="$v.instructionGuide.category.$dirty ? !$v.instructionGuide.category.$error : null" aria-describedby="category-feedback"></b-form-input>
                  <b-form-invalid-feedback id="category-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
              </div>

              <div class="col-6">
                <b-form-group id="catimg-group" label="Category Image:" label-for="catimg" description="Please enter an appropriate image for your category">
                  <b-form-input id="catimg" type="text" required placeholder="Enter Category Image" v-model="$v.instructionGuide.catimg.$model" :state="$v.instructionGuide.catimg.$dirty ? !$v.instructionGuide.catimg.$error : null" aria-describedby="category-feedback"></b-form-input>
                  <b-form-invalid-feedback id="catimg-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
              </div>

            </div>

            <div class="row">
              
              <div class="col-12">
                <b-form-group id="image-group" label="Image:" label-for="image" description="Please enter a valid image URL">
                  <b-form-input id="image" type="text" required placeholder="Enter Image URL" v-model="$v.instructionGuide.image.$model" :state="$v.instructionGuide.image.$dirty ? !$v.instructionGuide.image.$error : null" aria-describedby="image-feedback"></b-form-input>
                  <b-form-invalid-feedback id="image-feedback">
                    This is a required field and must be at least 3 characters.
                  </b-form-invalid-feedback>
                </b-form-group>
              </div>

              <div class="col-12">
                  <b-form-group id="equipment-group" label="Equipment Required:" label-for="equipment" description="Please enter all required equipment">
                    <b-form-textarea id="equipment" placeholder="List equipment..." rows="3" max-rows="6" v-model="$v.instructionGuide.equipment.$model" :state="$v.instructionGuide.equipment.$dirty ? !$v.instructionGuide.equipment.$error : null" aria-describedby="equipment-feedback"></b-form-textarea>
                    <b-form-invalid-feedback id="equipment-feedback">
                      This is a required field and must be at least 3 characters.
                    </b-form-invalid-feedback>
                  </b-form-group>
              </div>

              <div class="col-12">
                  <b-form-group id="instructions-group" label="Instructions Required:" label-for="instructions" description="Please enter all required instructions">
                    <b-form-textarea id="instructions" placeholder="Please enter your instructions" rows="12" max-rows="50" v-model="$v.instructionGuide.instructions.$model" :state="$v.instructionGuide.instructions.$dirty ? !$v.instructionGuide.instructions.$error : null" aria-describedby="instructions-feedback"></b-form-textarea>
                    <b-form-invalid-feedback id="instructions-feedback">
                      This is a required field and must be at least 3 characters.
                    </b-form-invalid-feedback>
                  </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <b-button @click="save" class="w-100 black rounded-0" variant="outline-light">Save</b-button>
              </div>
              <div class="col-6">
                      <b-button type="reset" class="block w-100 rounded-0" variant="outline-danger">Reset</b-button>
              </div>
            </div>

          </b-form>

      </div>
    </div>
  </section>
</template>

<script>

import InstructionGuideService from '@/services/InstructionGuideService'


import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'CreateInstructionGuide',
  components: {

  },
  data () {
    return {
      instructionGuide: {
        title: null,
        author: null,
        category: null,
        catimg: null,
        image: null,
        equipment: null,
        instructions: null
      }
    }
  },


  mixins: [validationMixin],
  validations: {
    instructionGuide: {
      title: {
        required,
        minLength: minLength(3)
      },
      author: {
        required,
        minLength: minLength(3)
      },
      category: {
        required,
        minLength: minLength(3)
      },
      catimg: {
        required,
        minLength: minLength(3)
      },
      image: {
        required,
        minLength: minLength(3)
      },
      equipment: {
        required,
        minLength: minLength(3)
      },
      instructions: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    async save () {


      this.$v.instructionGuide.$touch()
      if (this.$v.instructionGuide.$anyError) {
        return
      }


      try {
        await InstructionGuideService.putInstructionGuidesById(this.$store.state.route.params.instructionGuideId, this.instructionGuide)


        this.$router.push({
          name: 'guides',
          params: {
            instructionGuideId: this.$store.state.route.params.instructionGuideId
          }
        })
      } catch (error) {
        // console.log(error)
      }
    }
  },
  async mounted () {

    try {
      const instructionGuideId = this.$store.state.route.params.instructionGuideId
      this.instructionGuide = (await InstructionGuideService.getInstructionGuideById(instructionGuideId)).data
    } catch (error) {
      // console.log(error)
    }
  },
          onReset(evt) {
        evt.preventDefault()

        this.form.title = ''
        this.form.author = ''
        this.form.category = ''
        this.form.catimg = ''
        this.form.img = ''
        this.form.equipment = ''
        this.form.instructions = ''

        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
}

  

</script>


<style scoped>

</style>