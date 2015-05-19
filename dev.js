var express = require('express'),
	app = express();
  
  app.use(express.static('public'));
  
  app.get('/', function (req, res) {
    res.sendfile('public/index.html');
  });

  //

var port = process.env.PORT || 3023;
app.listen(port);
console.log("Dev server listening at http://localhost:" + port);