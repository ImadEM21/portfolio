const Project = require('../models/Project');
const fs = require('fs');


exports.createProject = (req, res) => {
    const project = new Project({
        ...req.body,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    project.save()
    .then(() => res.status(201).json({message: "Projet crée avec succès"}))
    .catch(error => res.status(400).json({error}));
};


exports.getAllProjects = (req, res) => {
    Project.find().sort({createdAt: 'desc'})
    .then(projects => res.status(200).json({projects}))
    .catch(error => res.status(400).json({error}));
};


exports.getProject = (req, res) => {
    Project.findById(req.params.id)
    .then(project => res.status(200).json({project}))
    .catch(error => res.status(404).json({error}));
};


exports.updateProject = (req, res) => {
    const project = req.file ? 
    {
        ...req.body,
        image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    Project.findByIdAndUpdate(req.params.id, {...project, _id: req.params.id})
    .then(() => res.status(200).json({message: "Projet modifié avec succès"}))
    .catch(error => res.status(400).json({error}));
};


exports.deleteProject = (req, res) => {
    Project.findById(req.params.id)
    .then(project => {
        const filename = project.image.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
            Project.findByIdAndDelete(req.params.id)
            .then(() => res.status(200).json({message: "Projet supprimé avec succès"}))
            .catch(error => res.status(400).json({error}));
        })
    })
    .catch(error => res.status(500).json({error}));
};