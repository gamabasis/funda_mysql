var db=require('../dbconnection');
var fs = require('fs');
var Persona={
  verTodas:function(callback){

  return db.query("Select * from person",callback);

}
};
module.exports=Persona;
