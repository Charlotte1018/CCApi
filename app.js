const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var orm = require("orm");
var userApi = require('./js/routes/userApi');
var sqlDBConfig = require("./js/config/SQLDB.json");
var sqlDBUtils = require('./js/sqlDBUtils');

app.get('/', function (req, res) {
  console.log(sqlDBConfig);
  console.log(sqlDBUtils);

  res.send('Hello World!')
})

// db connection by using orm
app.use(orm.express(sqlDBConfig, {
    define: function (db, models, next) {
        var listModels = require("./js/model/sqlModels");
        listModels(db, models);
        sqlDBUtils.setModels(models);
        console.log('Mysql connected to ' + sqlDBConfig.protocol + "://" + sqlDBConfig.host + "/" + sqlDBConfig.database);
        next();
    }
}));

app.use('/userAPI', userApi);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});