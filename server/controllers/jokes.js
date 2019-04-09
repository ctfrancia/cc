const fetch = require('node-fetch');
module.exports = async (req, res) => {
    const url = 'http://api.icndb.com/jokes/random'
    try {
        const result = await fetch(url);
        const resultJson =  await result.json();
        res.status(200).send(resultJson);
    } catch (error) {
        res.send({error})
    };
};
