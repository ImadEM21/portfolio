const Message = require('../models/Message');

exports.getMessages = (req, res, next) => {
    Message.find()
    .sort({createdAt: 'desc'})
    .then(messages => res.status(200).json({messages}))
    .catch(error => res.status(500).json({error}));
};

exports.postMessage = (req, res, next) => {
    const message = new Message({
        ...req.body
    });
    message.save()
    .then(() => res.status(201).json({message: "Message bien envoyé"}))
    .catch(error => res.status(500).json({error}));
};

exports.deleteMessage = (req, res, next) => {
    Message.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json({message: "Message supprimé avec succès"}))
    .catch(error => res.status(500).json({error}));
};