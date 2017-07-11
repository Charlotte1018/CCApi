/**
 * Created by hepen on 7/2/2017.
 */
var express = require("express");
var router = express.Router();
var sqlDBUtils = require('../../js/sqlDBUtils');

router.post("/create", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var icolist = req.body;
    var icolistModel = sqlDBUtils.getModels().icolist;
    console.log(icolist);
    icolistModel.create(icolist, (err) => {
        if (err) throw err;
        res.send({
            "status":0,
            "result": icolist
        });
    });
});

router.post("/update/:id", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var id = req.params.id;
    var newicolist = req.body;
    var icolistModel = sqlDBUtils.getModels().icolist;
    icolistModel.find({id: id}, (err, result) => {
        if (err) throw err;
        if (!result || !result.length) {
            res.send([]);
            return;
        }
        result = Object.assign(result[0], newicolist);
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
    var icolistModel = sqlDBUtils.getModels().icolist;
    icolistModel.find({id: id}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get("/", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    
    var icolistModel = sqlDBUtils.getModels().icolist;
    icolistModel.find({}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;