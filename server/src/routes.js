const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const InstructionGuidesController = require('./controllers/InstructionGuidesController');
const BlogPostsController = require('./controllers/BlogPostsController');
const AboutController = require('./controllers/AboutController');
const ContactFormsController = require('./controllers/ContactFormsController');

module.exports = (app) => {

    app.get('/status', (req, res) =>{
        res.send({message: 'hello world'})
    })
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register)

    app.post('/login', AuthenticationController.login)

    app.get('/about', AboutController.getAbout)

    app.get('/blogposts', BlogPostsController.getBlogPosts)
    app.post('/blogposts', BlogPostsController.postBlogPosts)
    app.get('/blogposts/:blogpostsId', BlogPostsController.getBlogPostById)
    app.delete('/blogposts/:blogpostsId', BlogPostsController.deleteBlogPostById)
    app.put('/blogposts/:blogpostsId', BlogPostsController.putBlogPostById)


    app.get('/contactforms', ContactFormsController.getContactForms)
    app.post('/contactforms', ContactFormsController.postContactForms)
    app.get('/contactforms/:contactformsId', ContactFormsController.getContactFormById)
    app.put('/contactforms/:contactformsId', ContactFormsController.putContactFormById)

    app.get('/instructionguides', InstructionGuidesController.getInstructionGuides)
    app.post('/instructionguides', InstructionGuidesController.postInstructionGuides)
    app.get('/instructionguides/:instructionGuidesId', InstructionGuidesController.getInstructionGuideById)
    app.delete('/instructionguides/:instructionGuidesId', InstructionGuidesController.deleteInstructionGuideById)
    app.put('/instructionguides/:instructionGuidesId', InstructionGuidesController.putInstructionGuideById)



}
