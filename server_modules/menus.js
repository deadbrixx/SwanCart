var express = require('express');
var router = express.Router();
var mongo = require('mongojs');
var dbconnection = mongo("mongodb://ashish:ashish1@ds147190.mlab.com:47190/nalaxcliecom");

router.get("/getallmenu", function(req, res){
    dbconnection.category.find(function(error, result){
        //console.log(result);
        res.send(result);
    });

    router.get("/getallsubmenu", function(req, res){
        dbconnection.subcategory.find(function(err, subresult){
              //console.log(subresult); 
              res.send(subresult);  
         });

         router.get("/getallsubsubmenu", function(req, res){
            dbconnection.subsubcategory.find(function(err, subresult){
                  //console.log(subresult); 
                  res.send(subresult);  
             });

                router.get("/getallbrandmenu", function(req, res){
                    dbconnection.brand.find(function(err, subresult){
                        console.log(subresult); 
                        res.send(subresult);  
                    });

      });
    });
  });
});

module.exports = router;