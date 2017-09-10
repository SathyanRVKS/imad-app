var express = require('express');
var morgan = require('morgan');
var path = require('path');

var firsttest = {
    content:`
    <p>Hello this is my webpage to you...
    </p>
    `
};
function template (data) {
var content=data.content;
var simple=`
<html>
    <head>
        <title>Hello Webpage</title>
    </head>
    <body>
    <p>
        ${content}
    </p>    
    </body>
</html>
`;
return simple;
}


var app = express();
app.use(morgan('combined'));
app.get('/')
app.get('/sat1', function (req, res) {
    res.send(template(firsttest));
});
app.get('/sat2', function (req, res) {
    res.send('this is the article two');
});
app.get('/sat3', function (req, res) {
    res.send('this is the article three');
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
