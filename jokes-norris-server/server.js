const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');

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

app.get('/', (req, res) => {
  request('http://api.icndb.com/jokes/random', (error, response, body) => {
    if (!error) {
      body = JSON.parse(body);
      const joke = { id: body.value.id, joke: body.value.joke };
      res.status(200).send(joke);
    } else {
      res
        .status(403)
        .send({ message: "chuck Norris didn't thousg that was funny" });
    }
  });
});

app.listen(port, () =>
  console.log(`chuck norris is listenning on port ${port}`),
);
