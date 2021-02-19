<template>
  <section id="blog" class="blog-section">
    <div class="blog-section-inner">
    <div class="blog bg-dark py-2">
      <div class="container">
        <h1>Handyman Blog</h1><hr />
      </div>
    </div>

<div class="container">
<div class="row">
<div class="col-3 mb-4" v-for="blogPost in blogPosts" :key="blogPost.id">
    <div class="hovereffect">
         <img :src="blogPost.image" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
                <h2>{{blogPost.title}}</h2>

				<p>
					<router-link :to="'/blog/view/' + blogPost.id" class="p-2 btn btn-outline-light rounded-0">View Blog Post</router-link>
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
import BlogPostService from '@/services/BlogPostService'
export default {
    name: 'ViewBlogPosts',
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
