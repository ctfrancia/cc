const app = require('express')(),
    cors = require('cors'),
    port = process.env.PORT || 3000,
    jokesRoute = require('./routes/jokes');

app.options('/*', cors())
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	next();
});
app.use('/jokes', jokesRoute);
app.listen(port, function() {
	console.log(`Server running on port ${port}!`);
})

