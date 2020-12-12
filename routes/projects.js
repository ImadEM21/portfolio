const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectsController');
const multer = require('../middlewares/multer-config');
const auth = require('../middlewares/auth');


router.get('/projects', projectController.getAllProjects);
router.post('/projects', auth, multer, projectController.createProject);
router.get('/projects/:id', projectController.getProject);
router.put('/projects/:id', auth, multer, projectController.updateProject);
router.delete('/projects/:id', auth, projectController.deleteProject);


module.exports = router;