var express = require('express');
var propertyRouter = express.Router();
var PropertyObject = require('../models/property');
var Owner = require('../models/owner');

// get the user and his properties

propertyRouter.route('/')
    .get(function (req, res) {
        PropertyObject.find(
            {user: req.user._id},
            function (err, properties) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.send(properties);
                }
            });
    })

    .post(function (req, res) {
        var property = new PropertyObject(req.body);
        property.user = req.user;
        property.save(function (err, newProperty) {
            if (err) {
                return res.status(500).send(err);
            } else {
                res.send(newProperty);
            }
        });

    })
    .delete(function (req, res) {
        PropertyObject.findOneAndRemove(
            {user: req.user._id},
            function (err, deletedUser) {
                if (err) {
                    return res.status(500).send(err);
                } else {
                    res.send(deletedUser);
                }
            }
        )
    });

// everything dealing with individual properties

propertyRouter.route('/:propertyId')
    .get(function (req, res) {
        PropertyObject.findOne(
            {_id: req.params.propertId, user: req.user._id},
            function (err, property) {
                if (err) {
                    return res.status(500).send(err);
                } else if (!property) {
                    return res.status(404).send(err);
                } else {
                    res.send(property);
                }
            });
    })
    .put(function (req, res) {
        PropertyObject.findOneAndUpdate(
            {_id: req.params.propertyId, user: req.user._id},
            req.body,
            {new: true},
            function (err, property) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    var test = JSON.stringify(property);
                    console.log("test " + test);
                    res.send(property);
                }
            });
    })
    .delete(function (req, res) {
        PropertyObject.findOneAndRemove(
            {_id: req.params.propertyId, user: req.user._id},
            function (err, property) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.send("this has been deleted");
                }
            });
    });

propertyRouter.route('/:userId')
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
                            console.log("user " + user);
                            res.send(user);
                        }
                    });
                }
            });
    });


module.exports = propertyRouter;