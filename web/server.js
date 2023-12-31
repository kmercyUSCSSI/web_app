const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Setup static files
app.use(express.static(__dirname + '/public'));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/html/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);