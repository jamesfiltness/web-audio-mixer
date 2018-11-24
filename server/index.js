const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res, next) {
  const filePath = path.resolve('index.html');
  res.sendFile(filePath, {}, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', filePath);
    }
  });
});

app.listen(3000, () => console.log('server listening on port 3000!'));
