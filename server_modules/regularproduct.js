var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var dbconnection = mongo("mongodb://ashish:ashish1@ds147190.mlab.com:47190/nalaxcliecom");

// router.post("/getbrandiddata", function(req, res){
//     dbconnection.product.find(req.body, function(err, result){
//         console.log(result);
//         res.send(result);
//     });
// });

    router.post("/getselectediddata", function(req, res){
        dbconnection.product.find(req.body, function(err, result){
          //  console.log(result);
            res.send(result);
        });
    });

module.exports = router;