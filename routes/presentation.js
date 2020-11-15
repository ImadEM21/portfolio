const express = require('express');
const router = express.Router();

const presentationController = require('../controllers/presentationCtr');


router.get('/presentation', presentationController.getIndex);


module.exports = router;