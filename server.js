var express = require('express');

// Create an app
var app = express();

app.use(express.static('public'));

app.listen(3001, function() {
  console.log('express is running');
});
