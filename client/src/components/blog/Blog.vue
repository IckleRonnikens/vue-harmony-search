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
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/create_blog.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
                <h2><router-link to="/blog/create" class="p-2 btn btn-outline-light rounded-0">Create New Blog</router-link></h2>

            </div>
    </div>
    
</div>
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/view_guide.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
                <h2>
                  <router-link to="/blog/edit" class="p-2 btn btn-outline-light rounded-0">Edit Blog</router-link>
                </h2>
            </div>
    </div>
    
</div>
<div class="col-4">
    <div class="hovereffect">
         <img src="@/assets/images/vlog.jpg" alt="" class="img-hover img-responsive img-fluid">
            <div class="overlay">
                <h2>
					<router-link to="/blog/view" class="p-2 btn btn-outline-light rounded-0">View Blog</router-link>
				</h2>
            </div>
    </div>
    
</div>
</div>
</div>      
          
          
</div>

</section>
</template>

<script>

export default {
    name: 'Blog-Post',
    components: {
  
    },
    data () {
    return {
      blogData: {
        title: "",
        author: "",
        category: "",
        image: "",
        content: ""
      }
    }
    }
}
</script>

<style scoped>

</style>
