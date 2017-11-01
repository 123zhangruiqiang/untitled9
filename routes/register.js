var express=require("express");
var router=express.Router();
var pool=require("../connectdb");
router.get('/register',function(req,res,next){

    var username=req.query.username;
    var password=req.query.password;
    console.log(username);
    console.log(password);
    var data=[
        username,
        password
    ];
    pool.con.query("insert into person(username,password) values(?,?)",data,function(err,rows,fields){
        if(err)
            throw err;

        console.log("success");

    });
    pool.con.end();


});

module.exports=router;