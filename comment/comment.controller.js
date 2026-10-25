const commentService = require('../comment/comment.service.js');

const createBulkComments = async (req, res) => {
  try {
    const commentsData = req.body;
    const createdComments = await commentService.createBulkComments(commentsData);
    res.status(201).json({
      message: 'Bulk comments created successfully',
    
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCommentContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, content } = req.body;
    const updatedComment = await commentService.updateCommentContent(id, userId, content);
    res.status(200).json({
      message: 'Comment updated successfully'
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const findOrCreateComment = async (req, res) => {
  try {
    const { postId, userId, content } = req.body;
    const { comment, created } = await commentService.findOrCreateComment(postId, userId, content);
    res.status(200).json({
      message: created ? 'Comment created successfully' : 'Comment found successfully',
      comment,
      created
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const searchCommentsByWord = async (req, res) => {
  try {
    const { word } = req.query;

    if (!word) {
      return res.status(400).json({
        error: "Please provide a word to search",
      });
    }

    const { count, comments } = await commentService.searchCommentsByWord(word);

    res.status(200).json({
      message: "Comments searched successfully",
      count,
      comments,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNewestCommentsForPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await commentService.getNewestCommentsForPost(postId);
    res.status(200).json({
      comments
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommentDetailsById = async (req, res) => {
  try {
    const { id } = req.params;

    const commentDetails = await commentService.getCommentDetailsById(id);

    if (!commentDetails) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.status(200).json({ commentDetails });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createBulkComments,
  updateCommentContent,
  findOrCreateComment,
  searchCommentsByWord,
  getNewestCommentsForPost,
  getCommentDetailsById
};