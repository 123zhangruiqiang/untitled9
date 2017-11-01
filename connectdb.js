var mysql=require("mysql");

var conn=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"123456",
    port:3306,
    database:"nodedb"

});

conn.connect();

exports.con=conn;