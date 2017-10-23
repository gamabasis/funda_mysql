var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'pass',
database:'bd_personas'


});
module.exports=connection;
