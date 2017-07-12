/**
 * Created by hepen on 7/2/2017.
 */
var express = require("express");
var router = express.Router();
var sqlDBUtils = require('../../js/sqlDBUtils');
var md5 = require('md5');


router.post("/create", function(req, res) {
    var user = req.body;

    var password = user.password;
    var md5Psw = md5(password);
    user.password = md5Psw;

    var userModel = sqlDBUtils.getModels().user;
    console.log(user);
    // console.log(userModel);
    userModel.create(user, (err) => {
        if (err) throw err;
        res.send({
            "status":0,
            "result": user
        });
    });
});

router.post("/login",function(req,res){
    var name = req.body.name;
    var password = req.body.password;
    var md5Psw = md5(password);

    var userModel = sqlDBUtils.getModels().user;
    userModel.find({name: name},1, (err, result) => {
        if (err) throw err;
        // console.log(result[0].password);
        if (result[0].password == md5Psw)
            res.send(true);
        else res.send(false);
    });
})

router.post("/update/:id", function(req, res) {
    var id = req.params.id;
    var newUser = req.body;
    var userModel = sqlDBUtils.getModels().user;
    userModel.find({id: id}, (err, result) => {
        if (err) throw err;
        if (!result || !result.length) {
            res.send([]);
            return;
        }
        result = Object.assign(result[0], newUser);
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
    var userModel = sqlDBUtils.getModels().user;
    userModel.find({id: id}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get("/", function(req, res) {
    var id = req.params.id;
    var userModel = sqlDBUtils.getModels().user;
    userModel.find({}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});



module.exports = router;