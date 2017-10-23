var express = require('express');
var router = express.Router();
var Person = require('../models/Persona');
//--------------------------------------------------------------------------------------------
router.get('/ver_todas',function(req,res,next){
        Person.verTodas(function(err,data){

            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(data);//or return count for 1 & 0
            }
        });
});

router.get('/ver_una',function(req,res,next){
    if (req.params.id) {
        Person.getPerson(req.params.f1, function(err,data){

            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(data);//or return count for 1 & 0
            }
        });
    }
    else {res.json('Error, no se recibieron parámetros');}
});

module.exports=router;
