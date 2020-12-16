const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const cors = require('cors');

const presentationRoute = require('./routes/presentation');
const projectRoute = require('./routes/projects');
const userRoute = require('./routes/users');
const messageRoute = require('./routes/messages');


const app = express();

mongoose.connect('mongodb://localhost/presentation', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
})
.then(() => console.log("Connexion à MongoDB réussie"))
.catch(() => console.log("connexion à MongoDB échouée"));

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api', presentationRoute);
app.use('/api', projectRoute);
app.use('/api', userRoute);
app.use('/api', messageRoute);

module.exports = app;
