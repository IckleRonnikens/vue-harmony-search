<template>
  <section class="contact-form-section">
      <div class="container w-50">
        
        <div class="contact-form-section-inner">
          <div class="contact-form bg-dark py-2">
              <h1>Edit Blog Post</h1><hr />
          </div>
 
      <b-form>
        <b-form-group id="title-group" label="Title:" label-for="title" class="text-white" description="Please enter your title">
          <b-form-input id="title" type="text" required placeholder="Enter Title" v-model="blogPost.title" aria-describedby="title-feedback">
          </b-form-input>
            <b-form-invalid-feedback id="firstname-feedback">
              This is a required field and must be at least 3 characters.
            </b-form-invalid-feedback>
        </b-form-group>

          <div class="form-row">
          <div class="col">
        <b-form-group id="author-group" label="Author:" label-for="authoer" class="text-white" description="Please enter author's name">
        <b-form-input id="authoer" type="text" required placeholder="Enter Author Name" v-model="blogPost.author" aria-describedby="author-feedback">
        </b-form-input>
          <b-form-invalid-feedback id="authoer-feedback">
            This is a required field and must be at least 3 characters.
          </b-form-invalid-feedback>
        </b-form-group>
          </div>
          <div class="col">
        <b-form-group id="category-group" label="Category:" label-for="category" class="text-white" description="Please enter your category">
          <b-form-input id="category" type="text" required placeholder="Enter Category" v-model="blogPost.category" aria-describedby="category-feedback">
          </b-form-input>
          <b-form-invalid-feedback id="category-feedback">
            This is a required field and must be at least 3 characters.
          </b-form-invalid-feedback>
        </b-form-group>
          </div>
          </div>

        <b-form-group id="image-group" label="Image:" label-for="image" class="text-white" description="Please enter your image">
          <b-form-input id="image" type="text" required placeholder="Enter Image" v-model="blogPost.image" aria-describedby="category-feedback">
          </b-form-input>
          <b-form-invalid-feedback id="image-feedback">
            This is a required field and must be at least 3 characters.
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="content-group" label="Content:" label-for="content" class="text-white" description="Please enter content">
          <b-form-textarea id="content" placeholder="Please enter content" rows="10" max-rows="50" v-model="blogPost.content" aria-describedby="instructions-feedback"></b-form-textarea>
            <b-form-invalid-feedback id="instructions-feedback">
              This is a required field and must be at least 3 characters.
            </b-form-invalid-feedback>
         </b-form-group>


            <div class="form-row">
              <div class="col">
                <b-button @click="save" class="block w-100 rounded-0" variant="outline-light">Submit</b-button>
              </div>
              <div class="col">
                      <b-button type="reset" class="block w-100 rounded-0" variant="outline-danger">Reset</b-button>
              </div>
            </div>


           </b-form>

      </div>
    </div>
  </section>
</template>



<script>

import BlogPostService from '@/services/BlogPostService'

export default {
  name: 'EditBlogPosts',
  components: {

  },
  data () {
    return {
      blogPost: {
        title: '',
        author: '',
        category: '',
        image: '',
        content: ''
      }
    }
  },
  methods: {
        async save () {


      try {
        await BlogPostService.putBlogPostsById(this.$store.state.route.params.BlogPostsId, this.blogPost)

        this.$router.push({
          name: 'blog',
          params: {
            blogPostId: this.$store.state.route.params.blogPostId
          }
        })
      } catch (error) {
        // console.log(error)
      }
    }
  },
  async mounted () {

    try {
      const blogPostId = this.$store.state.route.params.BlogPostsId
      this.blogPost = (await BlogPostService.getBlogPostsById(blogPostId)).data

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

        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
}
</script>


<style scoped>

</style>