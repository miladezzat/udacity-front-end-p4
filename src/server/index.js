const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const makeRequest = require('./makeRequest');

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'dist')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Example app listening on port :' + port)
})


app.post('/article', makeRequest.getArticle);