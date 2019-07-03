const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Soluciona erro relacionado com CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// using Atlas
mongoose.connect('mongodb+srv://semana:semana@cluster0-krc4r.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

// using local server (develoopment only)
// mongoose.connect('mongodb://localhost:27017/mongoDB', {
//     useNewUrlParser: true,
// });

app.use(express.urlencoded());
app.use(require('./routes'));

const port = process.env.port || 3333;

app.listen(3333);