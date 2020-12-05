const mongoose = require('mongoose');
const slugify = require('slugify');

const ProjectSchema = mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true},
    description: {type: String, required: true},
    repoGithub: {type: String, required: true},
    image: {type: String, required: true},
    url: {type: String, required: false},
    createdAt: {type: Date, default: Date.now}
});

ProjectSchema.pre('validate', next => {
    if (this.title) {
        this.slug = slugify(this.title, {lower: true, strict: true});
    }

    next();
});

module.exports = mongoose.model('Project', ProjectSchema);

