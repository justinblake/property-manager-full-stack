var express = require("express");
var authRoutes = express.Router();
var User = require('../models/owner');
var jwt = require('jsonwebtoken');
var config = require('../../config');

// creating a new user

authRoutes.route('/signup')
    .post(function (req, res) {
        User.find({username: req.body.username}, function (err, existingUsers) {
            if (err) {
                return res.status(500).send(err);
            } else if (existingUsers.length) {
                return res.status(401).json({success: false, message: "Username is already in use"});
            } else {
                var newUser = new User(req.body);
                newUser.save(function (err, userObj) {
                    if (err) res.status(500).send(err);
                    res.send({user: userObj, message: "Successfully created new user.", success: true});
                });
            }
        })
    });

// authenticating an existing user

authRoutes.route("/login")
    .post(function (req, res) {
        User.findOne({username: req.body.username, password: req.body.password}, function (err, user) {
            if (err) {
                return res.status(500).send(err);
            } else if (!user) {
                return res.status(403).send({success: false, message: "Username or password is not valid"});
            } else {
                var token = jwt.sign(user.toObject(), config.secret, {expiresIn: "24h"});
                res.json({token: token, user: user.toObject(), success: true, message: "Have a token"});

            }
        })
    });


module.exports = authRoutes;