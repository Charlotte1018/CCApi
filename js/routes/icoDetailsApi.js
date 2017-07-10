/**
 * Created by hepen on 7/2/2017.
 */
var express = require("express");
var router = express.Router();
var sqlDBUtils = require('../../js/sqlDBUtils');

router.post("/create", function(req, res) {
    var icodetails = req.body;
    var icodetailsModel = sqlDBUtils.getModels().icodetails;
    console.log(icodetails);
    icodetailsModel.create(icodetails, (err) => {
        if (err) throw err;
        res.send({
            "status":0,
            "result": icodetails
        });
    });
});

router.post("/update/:id", function(req, res) {
    var id = req.params.id;
    var newicodetails = req.body;
    var icodetailsModel = sqlDBUtils.getModels().icodetails;
    icodetailsModel.find({id: id}, (err, result) => {
        if (err) throw err;
        if (!result || !result.length) {
            res.send([]);
            return;
        }
        result = Object.assign(result[0], newicodetails);
        result.save(function(err) {
            res.send({
                "status":"0",
                "result":result
            });
        });
    });
});

router.get("/:id", function(req, res) {
    var id = req.params.id;
    var icodetailsModel = sqlDBUtils.getModels().icodetails;
    icodetailsModel.find({id: id}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;