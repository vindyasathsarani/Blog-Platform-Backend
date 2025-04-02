const express = require('express');
const router = express.Router();
const { 
  register, 
  login, 
  getUserProfile, 
  updateUserProfile 
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

module.exports = router;