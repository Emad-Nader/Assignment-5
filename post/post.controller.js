const postService = require("./post.service.js");

const createPost = async (req, res) => {
  try {
    const postData = req.body;
    const newPost = await postService.createPost(postData);
    res.status(201).json({
      message: "Post created successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user.id; 
    const deletedPost = await postService.deletePost(postId, userId);
    res.status(200).json({
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPostsDetails = async (req, res) => {
  try {
    const posts = await postService.getPostsDetails();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostsCommentCount = async (req, res) => {
  try {
    const posts = await postService.getPostsCommentCount();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  deletePost,
  getPostsDetails,
  getPostsCommentCount,
};
