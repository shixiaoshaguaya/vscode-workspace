var express = require('express');
var app = express();
app.engine('html', require('express-art-template'));
app.set('view options', {
  debug: process.env.NODE_ENV !== 'production'
});
app.set('views', '.');
app.get('/', function (req, res) {
  res.render('index.html', {
    user: {
      name: 'aui',
      pwd: 'abc123',
      tags: ['art', 'template', 'nodejs']
    }
  });
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})