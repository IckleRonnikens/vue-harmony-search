module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost',

        {
            title: {type: DataTypes.STRING},
            author: {type: DataTypes.STRING},
            category: {type: DataTypes.STRING},
            image: {type: DataTypes.STRING},
            content: {type: DataTypes.TEXT},
        }

    )
    return BlogPost
}