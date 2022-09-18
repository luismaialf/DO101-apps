var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Vamos pedir Estação do Guaraá hoje mesmo?\n');
});

app.get('/tst', function (req, res) {
  res.send('HUahsuhaushaus?\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

