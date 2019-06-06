const express = require('express');
const port = 3002;
const app = express();
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
cors = require('cors'),
factsRoute = require('./Views/view'),

// =================== initial settings ===================
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/ChuckFavs", { useNewUrlParser: true })

// routes

app.use('/facts', factsRoute);

app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send('Server running!');
});

// Set the server to listen on port 3002

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});

 
