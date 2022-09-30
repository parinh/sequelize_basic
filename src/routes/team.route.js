const express = require("express");
const router = express.Router();
const team = require("../services/team.service");

router.get('/', async function(req, res, next){
    try {
        res.json(await team.find());
    } catch (err) {
        console.error(` `, err.message);
        next(err);
    }
})

module.exports = {
    router
}