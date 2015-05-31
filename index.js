var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('index form: m.sm.cn');
});

app.get('/sm', function(request, response) {
  response.send('test route .. /sm');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
