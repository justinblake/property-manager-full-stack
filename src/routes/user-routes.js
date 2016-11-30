var express = require('express');
var ownerRouter = express.Router();
var PropertyObject = require('../models/property');
var Owner = require('../models/owner');

ownerRouter.route('/')
    .get(function (req, res) {
        PropertyObject.find(
            {user: req.user._id},
            function (err, properties) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    var userId = properties[0].user;
                    Owner.findOne({_id: userId}, function (err, user) {
                        if (err) {
                            return res.status(500).send(err);
                        } else {
                            res.send(user);
                        }
                    });
                }
            });
    })
    .put(function (req, res) {
        PropertyObject.find(
            {user: req.user._id},
            function (err, properties) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    var userId = properties[0].user;
                    Owner.findOneAndUpdate({_id: userId}, req.body, {new: true}, function (err, user) {
                        if (err) {
                            return res.status(500).send(err);
                        } else {
                            res.send(user);
                        }
                    });
                }
            });
    });

module.exports = ownerRouter;