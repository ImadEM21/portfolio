const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectsController');
const multer = require('../middlewares/multer-config');


router.get('/projects', projectController.getAllProjects);
router.post('/projects', multer, projectController.createProject);
router.get('/projects/:id', projectController.getProject);
router.put('/projects/:id', multer, projectController.updateProject);
router.delete('/projects/:id', projectController.deleteProject);


module.exports = router;