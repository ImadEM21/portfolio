const Project = require('../models/Project');


exports.createProject = (req, res) => {
    const project = new Project({
        ...req.body
    });
    Project.save()
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
    const project = {
        ...req.body
    };
    Project.findByIdAndUpdate(req.params.id, {...project, _id: req.params.id})
    .then(() => res.status(200).json({message: "Projet modifié avec succès"}))
    .catch(error => res.status(400).json({error}));
};

exports.deleteProject = (req, res) => {
    Project.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({message: "Projet supprimé avec succès"}))
    .catch(error => res.status(400).json({error}));
};