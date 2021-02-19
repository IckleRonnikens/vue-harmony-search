import Api from '@/services/Api'

export default {
    getBlogPosts(search){
        return Api().get('blogPosts', {
          params: {
              search:search
          }  
        })
    },
    postBlogPosts(blogPosts){
        return Api().post('blogPosts', blogPosts)
    },
    getBlogPostsById(blogPostId){
        return Api().get(`blogposts/${blogPostId}`)
    },
    putBlogPostsById(blogPostId, blogPosts){
        return Api().put(`blogPosts/${blogPostId}`, blogPosts)
    },
    deleteBlogPosts(blogPostId){
        return Api().get(`blogposts/${blogPostId}`)
    }
}