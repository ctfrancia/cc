const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('ayo e'));

app.listen(port, () =>
  console.log(`chuck norris is listenning on port ${port}`),
);
