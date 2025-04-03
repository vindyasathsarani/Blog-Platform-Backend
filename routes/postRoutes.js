const express = require('express');
const router = express.Router();
const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  likePost,
  getPostsByCategory,
  getPostsByUser,
} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

// Post routes
router.post('/', protect, createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', protect, updatePost);
router.delete('/:id', protect, deletePost);
router.put('/:id/like', protect, likePost);
router.get('/category/:category', getPostsByCategory);
router.get('/user/:userId', getPostsByUser);

module.exports = router;