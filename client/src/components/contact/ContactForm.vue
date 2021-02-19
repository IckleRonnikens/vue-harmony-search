<template>
  <section id="contact-form" class="contact-form-section">
      <div class="container w-50">
        
        <div class="contact-form-section-inner">
          <div class="contact-form bg-dark py-2">
              <h1>Contact Form</h1><hr />
          </div>
 

      <b-form>
        <div class="form-row">
          <div class="col">
 
        <b-form-group id="title-group" label="First Name:" label-for="firstname" class="text-white" description="Please enter your first name">
          <b-form-input id="firstname" type="text" required placeholder="Enter First Name" v-model="contactForm.firstname" aria-describedby="title-feedback">
          </b-form-input>
            <b-form-invalid-feedback id="firstname-feedback">
              This is a required field and must be at least 3 characters.
            </b-form-invalid-feedback>
        </b-form-group>

          </div>
          <div class="col">

        <b-form-group id="author-group" label="Last Name:" label-for="lastname" class="text-white" description="Please enter your last name">
        <b-form-input id="lastname" type="text" required placeholder="Enter Last Name" v-model="contactForm.lastname" aria-describedby="author-feedback">
        </b-form-input>
          <b-form-invalid-feedback id="lastname-feedback">
            This is a required field and must be at least 3 characters.
          </b-form-invalid-feedback>
        </b-form-group>

          </div>
        </div>

        <b-form-group id="email-group" label="Email:" label-for="email" class="text-white" description="Please enter your email">
          <b-form-input id="email" type="text" required placeholder="Enter Email" v-model="contactForm.email" aria-describedby="category-feedback">
          </b-form-input>
          <b-form-invalid-feedback id="email-feedback">
            This is a required field and must be at least 3 characters.
          </b-form-invalid-feedback>
        </b-form-group>

                  <b-form-group id="message-group" label="Message:" label-for="message" class="text-white" description="Please enter a message">
                    <b-form-textarea id="message" placeholder="Please enter a message" rows="10" max-rows="50" v-model="contactForm.message" aria-describedby="instructions-feedback"></b-form-textarea>
                    <b-form-invalid-feedback id="instructions-feedback">
                      This is a required field and must be at least 3 characters.
                    </b-form-invalid-feedback>
                  </b-form-group>

        <div class="form-row">
          <div class="col">
                <b-button @click="create" class="block w-100 rounded-0" variant="outline-light">Submit</b-button>
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

import ContactFormService from '@/services/ContactFormService'

export default {
  name: 'ContactForm',
  components: {

  },
  data () {
    return {
      contactForm: {
        firstname: '',
        lastname: '',
        email: '',
        message: ''
      }
    }
  },

methods: {
    async create () {


      try {
        await ContactFormService.postContactForms(this.contactForm)
        this.$router.push({
          name: 'index'
        })
      } catch (error) {
        // console.log(error) 
      }
    },
        onReset(evt) {
        evt.preventDefault()

        this.form.firstname = ''
        this.form.lastname = ''
        this.form.email = ''
        this.form.message = ''


        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
}

  }
</script>


<style scoped>

</style>