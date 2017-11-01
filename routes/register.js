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
router.post('/po',function(req,res,next){
    var username=req.param("username");
    var password=req.param("password");
    var username1=req.body.username;
    var password1=req.body.password;
    console.log(username1);
    console.log(password1);
    console.log(username);
    console.log(password);
    console.log("------------------")
    res.render("success");
})

module.exports=router;