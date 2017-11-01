var mysql =require("mysql");

var conn=mysql.createConnection({
    port:3306,
    user:"root",
    password:"123456",
    database:"springmvcdb",
    host:"localhost"

});

var c=conn.connect();
console.log(conn);

conn.query("select * from person",function(err,rows,fields){

    if (err)
        throw  err;
    console.log("this solution is"+rows);
});