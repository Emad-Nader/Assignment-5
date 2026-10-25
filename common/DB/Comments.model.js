const { sequelize } = require('./conections');
const { DataTypes } = require('sequelize');
const user = require('./Users.model');
const Post = require('./Posts.model');


const Comments = sequelize.define('Comments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Post,
      key: 'post_id'
    }
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
  timestamps: true
});
module.exports = Comments;