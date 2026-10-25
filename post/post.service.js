const Post = require("../common/DB/Posts.model.js");
const postRepository = require('./post.repository.js');

const createPost = async (postData) => {
  try {
    return await postRepository.createPost(postData);
  } catch (error) {
    throw error;
  }
}

const deletePost = async (postId, userId) => {
  try {
    return await postRepository.deletePost(postId, userId);
  } catch (error) {
    throw error;
  }
};

const getPostsDetails = async () => {
  return await postRepository.getPostsDetails();
};

const getPostsCommentCount = async () => {
  return await postRepository.getPostsCommentCount();
};

module.exports = {
  createPost,
  deletePost,
  getPostsDetails,
  getPostsCommentCount,
};

