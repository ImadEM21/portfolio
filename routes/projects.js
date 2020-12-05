const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectsController');


router.get('/projects', projectController.getAllProjects);
router.post('/projects', projectController.createProject);
router.get('projects/:id', projectController.getProject);
router.put('projects/:id', projectController.updateProject);
router.delete('projects/:id', projectController.deleteProject);


module.exports = router;