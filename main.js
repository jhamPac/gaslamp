const express = require('express');
const app     = express();

app.get('/', (req, res) => {
  res.sendfile('public/index.html');
});

app.listen(3000, () => console.log('App listening on port 3000'));
