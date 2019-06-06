const mongoose = require('mongoose');


const factsSchema = new mongoose.Schema({
    Id:'',
    Joke:''
})

module.exports = mongoose.model('facts',factsSchema);