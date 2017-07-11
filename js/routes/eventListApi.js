/**
 * Created by hepen on 7/2/2017.
 */
var express = require("express");
var router = express.Router();
var sqlDBUtils = require('../../js/sqlDBUtils');

router.post("/create", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var eventlist = req.body;
    var eventlistModel = sqlDBUtils.getModels().eventlist;
    console.log(eventlist);
    eventlistModel.create(eventlist, (err) => {
        if (err) throw err;
        res.send({
            "status":0,
            "result": eventlist
        });
    });
});

router.post("/update/:id", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var id = req.params.id;
    var neweventlist = req.body;
    var eventlistModel = sqlDBUtils.getModels().eventlist;
    eventlistModel.find({id: id}, (err, result) => {
        if (err) throw err;
        if (!result || !result.length) {
            res.send([]);
            return;
        }
        result = Object.assign(result[0], neweventlist);
        result.save(function(err) {
            res.send({
                "status":"0",
                "result":result
            });
        });
    });
});

router.get("/:id", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var id = req.params.id;
    var eventlistModel = sqlDBUtils.getModels().eventlist;
    eventlistModel.find({id: id}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get("/", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    var eventlistModel = sqlDBUtils.getModels().eventlist;
    eventlistModel.find({}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;