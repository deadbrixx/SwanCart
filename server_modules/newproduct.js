var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var dbconnection = mongo("mongodb://localhost:27017/nalaxecomapp");

router.post("/newprod", function(req, res){
    dbconnection.product.find({ptype:"New"}, function(err, result){
        console.log(result);
        res.send(result);
    });
});

module.exports = router;