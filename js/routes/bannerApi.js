/**
 * Created by hepen on 7/2/2017.
 */
var express = require("express");
var router = express.Router();
var sqlDBUtils = require('../../js/sqlDBUtils');
var orm = require("orm");

router.post("/create", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods","POST");
    res.setHeader("Access-Control-Allow-Headers","x-requested-with,content-type");
    var banner = req.body;
    var bannerModel = sqlDBUtils.getModels().banner;
    console.log(banner);
    bannerModel.create(banner, (err) => {
        if (err) throw err;
        res.send({
            "status":0,
            "result": banner
        });
    });
});

router.post("/update/:id", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods","POST");
    res.setHeader("Access-Control-Allow-Headers","x-requested-with,content-type");
    var id = req.params.id;
    var newbanner = req.body;
    var bannerModel = sqlDBUtils.getModels().banner;
    bannerModel.find({id: id}, (err, result) => {
        if (err) throw err;
        if (!result || !result.length) {
            res.send([]);
            return;
        }
        result = Object.assign(result[0], newbanner);
        result.save(function(err) {
            res.send({
                "status":"0",
                "result":result
            });
        });
    });
});

router.post("/delete/:id",function(req,res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods","POST");
    res.setHeader("Access-Control-Allow-Headers","x-requested-with,content-type");

    var id = req.params.id;
    var bannerModel = sqlDBUtils.getModels().banner;
    bannerModel.find({id:id},(err,result) => {
        if (err) throw err;
        if (!result || !result.length) {
            res.send([]);
            return;
        }

        result = Object.assign(result[0]);
        result.isDeleted = "1";
        result.save(function(err){
            res.send({
                "status":"0",
                "result":result
            })
        })
    })
})

router.get("/:id", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var id = req.params.id;
    var bannerModel = sqlDBUtils.getModels().banner;
    bannerModel.find({id: id}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get("/", function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var bannerModel = sqlDBUtils.getModels().banner;

    bannerModel.find({ isDeleted: orm.eq(0)}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


module.exports = router;