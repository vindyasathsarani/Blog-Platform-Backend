const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getAllPosts,
  deletePost,
  getAllComments,
  deleteComment,
  getDashboardStats,
  checkAdminStatus,
  createAdminUser
} = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

// Apply both protect and admin middleware to all routes
router.use(protect, admin);

// Admin status check
router.get('/check', checkAdminStatus);

// User routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/users/create-admin', createAdminUser);

// Post routes
router.get('/posts', getAllPosts);
router.delete('/posts/:id', deletePost);

// Comment routes
router.get('/comments', getAllComments);
router.delete('/comments/:id', deleteComment);

// Dashboard stats
router.get('/stats', getDashboardStats);

module.exports = router;