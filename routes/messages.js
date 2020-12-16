const express = require('express');
const router = express.Router();

const messageController = require('../controllers/messageController');

const auth = require('../middlewares/auth');

router.get('/messages', auth, messageController.getMessages);
router.post('/messages', messageController.postMessage);
router.delete('/messages/:id', auth, messageController.deleteMessage);

module.exports = router;