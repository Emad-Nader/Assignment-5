const { DataTypes,Model } = require("sequelize");
const { sequelize } = require("./conections.js");
const user = require("./Users.model.js");

class post extends Model {}
 post.init({
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: user,
      key: 'user_id'
    }
  }
}, {
   sequelize,
   modelName: 'post',
   timestamps: true
  
 });


module.exports = post;