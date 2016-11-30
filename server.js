var express = require('express');
var app = express();
var expressJwt = require("express-jwt");

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var morgan = require("morgan");

var path = require('path');
var port = process.env.PORT || 8000;
var config = require('./config');

mongoose.connect(config.database);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", expressJwt({secret: config.secret}));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/property', require('./src/routes/property-routes'));
app.use('/api/user', require('./src/routes/user-routes'));
app.use('/all', require('./src/routes/listing-routes'));

app.use('/auth', require('./src/routes/auth-routes'));



app.listen(port, function() {
    console.log("port " + port);
});