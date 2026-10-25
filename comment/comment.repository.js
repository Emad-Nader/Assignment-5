const comment = require('../common/DB/Comments.model.js');
const { Op } = require('sequelize');

const createBulkComments = async (commentsData) => {
  return await comment.bulkCreate(commentsData);
}


const updateCommentContent = async (id, userId, newContent) => {
  const commentToUpdate = await comment.findOne({ where: { id: id } });
  if (!commentToUpdate) {
    throw new Error('Comment not found');
  }
  if (commentToUpdate.userId !== userId) {
    throw new Error('Unauthorized: You are not the owner of this comment');
  }
  return await commentToUpdate.update({ content: newContent });
};


const findOrCreateComment = async (postId, userId, content) => {
  const [commentInstance, created] = await comment.findOrCreate({
    where: { postId, userId, content },
    defaults: { postId, userId, content }
  });
  return { comment: commentInstance, created: Boolean(created) };
}


const searchCommentsByWord = async (word) => {
  const { count, rows } = await comment.findAndCountAll({
    where: {
      content: {
        [Op.like]: `%${word}%`
      }
    }
  });
  return { count, comments: rows };
}



const getNewestCommentsForPost = async (postId) => {
  const comments = await comment.findAll({
    where: { postId },
    order: [['createdAt', 'DESC']],
    limit: 3
  });
  return comments;
}

// 6. Get Specific Comment By PK with User and Post Information. (0.5 Grade)
// o URL: GET /comments/details/:id

const getCommentDetailsById = async (id) => {
  const commentDetails = await comment.findOne({
    where: { id },
    include: [
      {
        model: require("../common/DB/Users.model.js"),
        attributes: ["user_id", "name", "email"],
      },
      {
        model: require("../common/DB/Posts.model.js"),
        attributes: ["post_id", "title", "content"],
      },
    ],
  });

  return commentDetails;
};



module.exports = {
  createBulkComments,
  updateCommentContent,
  findOrCreateComment,
  searchCommentsByWord,
  getNewestCommentsForPost,
  getCommentDetailsById
};

