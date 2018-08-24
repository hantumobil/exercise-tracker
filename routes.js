var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var api = require('./api');

router.post('/new-user', function (req, res, next) {    
    const newUser = {
        username: req.body.username
    }
    api.User.create(newUser)
        .then(savedUser => {
            res.json(savedUser);
            next();
        })
        .catch(err => {
            res.json(err);
            next();
        });
});

router.post('/add', function (req, res, next) {
    const newExercise = {
        userId: req.body.userId,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date
    }
    api.Exercise.create(newExercise)
        .then(savedExercise => {
            res.json(savedExercise);
            next();
        })
        .catch(err => {
            res.json(err);
            next();
        });

})

module.exports = router;