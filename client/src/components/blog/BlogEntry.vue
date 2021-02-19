<template>
  <section class="guides-section">
        <div class="guides-section-inner">
          <div class="container">
            <div class="guides text-white py-2">
              <h1>{{blogPost.title}}</h1><hr />
            </div>

    <div class="row">
      <div class="col-12">
            <p>Posted by {{blogPost.author}} in {{blogPost.category}} on {{blogPost.updatedAt}}</p><hr />
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <img :src="blogPost.image" :alt="blogPost.title" class="img-fluid rounded shadow">
      </div>

      <div class="col-8">
            <p>{{blogPost.content}}</p><br>      
      </div>
    </div>
<hr />
    <div class="row">
      <div class="col-4 mt-4">
        <router-link :to="'/blog/' + blogPost.id +'/edit'" class="mr-2 w-100 btn btn-outline-success rounded-0">Edit</router-link>
      </div>
      <div class="col-4 mt-4">
        <button @click="deleteBlogPosts" class="mr-2 w-100 btn btn-outline-danger rounded-0">Delete</button>
      </div>
      <div class="col-4 mt-4">
        <router-link :to="'/blog/view'" class="mr-2 w-100 btn btn-outline-light rounded-0">View Other Blogs</router-link>
      </div>
    </div>
     </div>
</div>
</section>
</template>



<script>
/* eslint-disable */

import BlogPostService from "@/services/BlogPostService";

export default {
    name: "BlogEntry",
    components: {

    },
    data (){
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
    async mounted(){
        const blogPostId = this.$store.state.route.params.BlogPostsId
        
        this.blogPost = (await BlogPostService.getBlogPostsById(blogPostId)).data
        console.log(this.blogPosts)
    },
  methods: {
    async deleteBlogPosts () {
      
      try {
        const blogPostId = this.$store.state.route.params.BlogPostsId
        await BlogPostService.deleteBlogPosts(blogPostId)
        this.$router.push({name: 'blog'})
      } catch (error) {
         console.log(error) 
      }
    }
}
}
</script>

<style scoped>

</style>