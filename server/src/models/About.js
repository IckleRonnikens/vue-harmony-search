module.exports = (sequelize, DataTypes) => {
    const About = sequelize.define('About',

        {
            name: {type: DataTypes.STRING},
            title: {type: DataTypes.STRING},
            info: {type: DataTypes.STRING},
            img: {type: DataTypes.STRING}
        }

    )
    return About
}