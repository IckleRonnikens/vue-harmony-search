//User Sequelize Model
module.exports = (sequelize, DataTypes) => {
    const ContactForm = sequelize.define('ContactForm', 
      //Defines the user model
      {
      firstname: {type: DataTypes.STRING},
      lastname: {type:DataTypes.STRING},
      email: {type:DataTypes.STRING},
      message: {type:DataTypes.TEXT}
      })
  
    return ContactForm
  }