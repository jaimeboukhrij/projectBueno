const express = require('express');
const router = express.Router();

const User = require('./../models/User.model')

router.get("/User", (req, res, next) => {
    User
        .find()
        .then(users => res.json(users))
        .catch(err => next(err))
});

module.exports = router