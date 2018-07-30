var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var dbconnection = mongo("mongodb://ashish:ashish1@ds147190.mlab.com:47190/nalaxcliecom");

router.get("/newprod", function(req, res){
    dbconnection.product.find({ptype:"New"}, function(err, result){
        console.log(result);
        res.send(result);
    });
});

router.post("/getnewprodiddata", function(req, res){
    dbconnection.product.find(function(err, result){
        console.log(result);
        res.send(result);
    });
});

module.exports = router;