if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Soluciona erro relacionado com CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
});

// using local server (development only)
// mongoose.connect('mongodb://localhost:27017/mongoDB', {
//     useNewUrlParser: true,
// });

app.use(express.urlencoded());
app.use(require('./routes'));

const port = process.env.PORT;

app.listen(port);