const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    repoGithub: {type: String, required: true},
    image: {type: String, required: true},
    url: {type: String, required: false},
    createdAt: {type: Date, default: Date.now},
    stack: [
        {type: String, required: false}
    ]
});


module.exports = mongoose.model('Project', ProjectSchema);

