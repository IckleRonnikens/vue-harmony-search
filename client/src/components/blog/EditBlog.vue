<template>
  <section id="edit-blog" class="edit-blog-section">
    <div class="edit-blog-section-inner">
    <div class="edit-blog bg-dark py-2">
      <div class="container">
        <h1>Edit Posts:</h1><hr />
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
  <tbody  v-for="blogPost in blogPosts" :key="blogPost.id">
    <tr>
      <th scope="row">{{blogPost.id}}</th>
      <td>{{blogPost.title}}</td>
      <td>{{blogPost.author}}</td>
      <td>{{blogPost.category}}</td>
      <td><router-link :to="'/blog/' + blogPost.id +'/edit'" class="mr-2 w-100 text-white">Link</router-link></td>
    </tr>
  </tbody>
</table>

          
          
</div>
</div>
</section>
</template>

<script>
import BlogPostService from '@/services/BlogPostService'
export default {
    name: 'EditBlog',
    components: {
  
    },
    data () {
        return {
            blogPosts: null,

        }
},
    watch: {
      '$route.query.search' :{
        immediate: true,
        async handler (value) {
          this.blogPosts = (await BlogPostService.getBlogPosts(value)).data

            }
        }
}
}
</script>

<style scoped>

</style>
