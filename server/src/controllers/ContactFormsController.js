//Imports
const {ContactForm} = require('../models') //Sequelize Model for User
const {Op} = require('../models')

module.exports = {
  //Routes
  //Gets/Searches Instruction Guides from the database
  async getContactForms (req, res) {
      try {
        let contactForms = null // Stores the returned result from the database
        const search = req.query.search // Holds the search query from the url
        
        // If there is a search query
        if(search){
          // Find where title, category, author or equipment are like the search query
          // Please refer to the sequelizejs documentation for further details and examples http://docs.sequelizejs.com/manual/querying.html
          contactForms = await ContactForm.findAll({
            where: {[Op.or]: [{ 'firstname': {[Op.like]: `%${search}%` } }, { 'lastname': {[Op.like]: `%${search}%` } }, { 'email': {[Op.like]: `%${search}%` } }, { 'message': {[Op.like]: `%${search}%` } }]}
          })
        }
        // Else there is no search query
        else {
          // Load the first 10 results
          contactForms = await ContactForm.findAll({
            limit:10
          })
        }
        res.send(contactForms);
      } catch (err) {
        console.log(err);
        res.status(500).send({
          error: 'An error has occurred trying to get all Contact Forms'
        })
      }
  },
  async postContactForms (req, res) {
    try {
      const contactForms = await ContactForm.create(req.body)
      res.send(contactForms);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to post a new Contact Form'
      })
    }
  },    
  async getContactFormById (req, res) {
    try {
      const contactForms = await ContactForm.findOne({
        where: {id: req.params.contactFormsId}
      })

      console.log(req.params.contactFormId);
      res.send(contactForms);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to get all Instruction Guides'
      })
    }
  },
  async putContactFormById (req, res) {
    console.log("james")
    console.log(req.params.contactFormsId);
    try {
      const contactForms = await ContactForm.update(req.body, {
        where: {id: req.params.contactFormsId}
      })
      res.send(contactForms);
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: 'An error has occurred trying to update the Contact Form ' + err
      })
    }
  }
}