const Post = require("../common/DB/Posts.model.js");
const Comment = require("../common/DB/Comments.model.js");
const User = require("../common/DB/Users.model.js");
const { fn, col } = require("sequelize");

const createPost = async (postData) => {
  const newPost = await Post.build(postData);
  await newPost.save();
  return newPost;
};

const deletePost = async (postId, userId) => {
  const post = await Post.findByPk(postId);
  if (!post) {
    throw new Error("Post not found");
  }
  if (Number(post.user_id) !== Number(userId)) {
    throw new Error("You are not the owner of this post");
  }
  await post.destroy();
  return post;
};

const getPostsDetails = async () => {
  return await Post.findAll({
    attributes: ["post_id", "title"],
    include: [
      {
        model: User,
        attributes: ["user_id", "name"],
      },
      {
        model: Comment,
        attributes: ["id", "content"],
      },
    ],
  });
};

const getPostsCommentCount = async () => {
  return await Post.findAll({
    attributes: [
      "post_id",
      "title",
      [fn("COUNT", col("Comments.id")), "commentCount"],
    ],
    include: [
      {
        model: Comment,
        attributes: [],
        required: false,
      },
    ],
    group: ["post.post_id"],
  });
};


module.exports = {
  createPost,
  deletePost,
  getPostsDetails,
  getPostsCommentCount,
};
