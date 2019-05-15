const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');

const port = process.env.PORT || 5000;
const filePath = '../jokes-norris';

app.use('/', express.static(filePath));

app
  .use(
    cors({
      origin: 'http://localhost:4200',
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    }),
  )
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(port, () =>
  console.log(`chuck norris is listenning on port ${port}`),
);
