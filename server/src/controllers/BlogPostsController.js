//Imports
const {BlogPost} = require('../models') //Sequelize Model for User
const {Op} = require('../models')

module.exports = {
  //Routes
  //Gets/Searches Instruction Guides from the database
  async getBlogPosts (req, res) {
      try {
        let blogPosts = null // Stores the returned result from the database
        const search = req.query.search // Holds the search query from the url
        
        // If there is a search query
        if(search){
          // Find where title, category, author or equipment are like the search query
          // Please refer to the sequelizejs documentation for further details and examples http://docs.sequelizejs.com/manual/querying.html
          blogPosts = await BlogPost.findAll({
            where: {[Op.or]: [{ 'title': {[Op.like]: `%${search}%` } }, { 'author': {[Op.like]: `%${search}%` } }, { 'category': {[Op.like]: `%${search}%` } }, { 'content': {[Op.like]: `%${search}%` } }]}
          })
        }
        // Else there is no search query
        else {
          // Load the first 10 results
          blogPosts = await BlogPost.findAll({
            limit:10
          })
        }
        res.send(blogPosts);
      } catch (err) {
        console.log(err);
        res.status(500).send({
          error: 'An error has occurred trying to get all Blog Posts'
        })
      }
  },
  async postBlogPosts (req, res) {
    try {
      const blogPosts = await BlogPost.create(req.body)
      res.send(blogPosts);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to post a new Blog Post'
      })
    }
  },    
  async getBlogPostById (req, res) {
    console.log(req.params.blogpostsId);
    try {
      const blogPosts = await BlogPost.findOne({
        where: {id: req.params.blogpostsId}
      })
      console.log(blogPosts)
  
      res.send(blogPosts);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to get all Blog Post'
      })
    }
  },
  async putBlogPostById (req, res) {

    console.log(req.params);
    try {
      const blogPosts = await BlogPost.update(req.body, {
        where: {id: req.params.blogpostsId}
      })
      res.send(blogPosts);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to update the Blog Post ' + err
      })
    }
  },
  async deleteBlogPostById (req, res) {
    try {
      const {blogpostsId} = req.params 
      const blogPosts = await BlogPost.findOne({
        where: {
          id: blogpostsId
        }
      })
      await blogPosts.destroy()
      res.send(blogPosts)
      }
    catch (err) {
      console.log(err);
      res.status(500).send({
      error: 'An error has occurred trying to deleteing the Blog Posts'
      })
    }
}
}