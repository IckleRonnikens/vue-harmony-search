//User Sequelize Model
module.exports = (sequelize, DataTypes) => {
    const InstructionGuide = sequelize.define('InstructionGuide', 
      //Defines the user model
      {
      title: {type: DataTypes.STRING},
      author: {type:DataTypes.STRING},
      category: {type:DataTypes.STRING},
      catimg: {type:DataTypes.STRING},
      image: {type:DataTypes.STRING},
      equipment: {type:DataTypes.TEXT},
      instructions: {type:DataTypes.TEXT}
      })
  
    return InstructionGuide
  }