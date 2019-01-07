var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./app/routes/appRoutes')
var cors = require('cors');

app = express();
app.use(cors());
app.listen(5000);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

routes(app);

console.log('API server started on: ' + 5000);