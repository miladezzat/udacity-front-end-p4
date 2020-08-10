const aylien = require('aylien_textapi');

var textapi = new aylien({
    application_id: process.env.API_ID="68837b99",
    application_key: process.env.API_KEY="0c18469543844e03b477be1a884e87bc"
});

function getNews(req, res) {
    textapi.sentiment({
            url: req.body.url
        },
        function(error, response) {
            res.send(response);
        }
    );
}

// exports.getArticle = getArticle;
exports.getNews = getNews;