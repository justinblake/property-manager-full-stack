var express = require('express');
var listingRouter = express.Router();
var PropertyObject = require('../models/property');

listingRouter.route('/')
    .get(function(req, res) {
        PropertyObject.find({}, function(err, allProperties) {
            if(err) {
                res.status(500).send(err);
            } else {
                res.send(allProperties);
            }
        })
    });


module.exports = listingRouter;