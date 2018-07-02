var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var dbconnection = mongo("mongodb://localhost:27017/nalaxecomapp");

router.post("/userlogin", function(req, res){
    dbconnection.userregister.find({"userdata.email":req.body.uemail, "userdata.password":req.body.upwd},{"userdata.email":1,"userdata.password":1,"userdata.fname":1}, function(err, result){
        console.log(result);
        res.send(result);
    });
});


module.exports = router;