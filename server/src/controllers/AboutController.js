//Imports
const {About} = require('../models') //Sequelize Model for User

module.exports = {
  //Routes
  //Gets/Searches Instruction Guides from the database
  async getAbout (req, res) {
      try {  
          about = await About.findAll()
          res.send(about)
        } catch (err) {
        console.log(err);
        res.status(500).send({
          error: 'An error has occurred trying to get about' + err
        })
      }
  }
}