const express = require('express');
const router = express.Router();
const { 
  register, 
  login, 
  getUserProfile, 
  updateUserProfile,
  adminLogin,
  createInitialAdmin
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

// Admin specific routes
router.post('/admin/login', adminLogin);
router.post('/create-admin', createInitialAdmin);

module.exports = router;