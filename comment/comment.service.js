const commentRepository = require('../comment/comment.repository.js');

const createBulkComments = async (commentsData) => {
  return await commentRepository.createBulkComments(commentsData);
};

const updateCommentContent = async (id, userId, newContent) => {
  return await commentRepository.updateCommentContent(id, userId, newContent);
};

const findOrCreateComment = async (postId, userId, content) => {
  return await commentRepository.findOrCreateComment(postId, userId, content);
};

const searchCommentsByWord = async (word) => {
  return await commentRepository.searchCommentsByWord(word);
};

const getNewestCommentsForPost = async (postId) => {
  return await commentRepository.getNewestCommentsForPost(postId);
};

const getCommentDetailsById = async (id) => {
  return await commentRepository.getCommentDetailsById(id);
};

module.exports = {
  createBulkComments,
  updateCommentContent,
  findOrCreateComment,
  searchCommentsByWord,
  getNewestCommentsForPost,
  getCommentDetailsById
};