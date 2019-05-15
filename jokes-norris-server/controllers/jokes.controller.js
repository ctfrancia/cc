const request = require('request');

module.exports.newJoke = (req, res) => {
  request('http://api.icndb.com/jokes/random', (error, response, body) => {
    if (!error) {
      body = JSON.parse(body);
      const joke = body.value.joke.replace(/&quot;/g, '"');
      const data = {
        joke,
        id: body.value.id,
      };
      res.status(200).send(data);
    } else {
      res
        .status(403)
        .send({ message: "Chuck Norris didn't thousg that was funny" });
    }
  });
};
