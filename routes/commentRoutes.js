const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  createComment,
  getCommentsByPost,
  updateComment,
  deleteComment,
} = require('../controllers/commentController');
const { protect } = require('../middleware/authMiddleware');

// Routes for /api/posts/:postId/comments
router.post('/', protect, createComment);
router.get('/', getCommentsByPost);

// Routes for /api/comments/:id
router.put('/:id', protect, updateComment);
router.delete('/:id', protect, deleteComment);

module.exports = router;