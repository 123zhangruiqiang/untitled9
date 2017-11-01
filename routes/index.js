var express = require('express');
var router = express.Router();
var pool=require("../connectdb");

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("pre");

 // console.log(pool);
 /* pool.con.query('select * from person',function(err,rows,fields){
    if(err){
      throw  err;
    }
    console.log(rows);
  });
  pool.con.end();*/
 console.log("================================================")
  res.render('log');
});

module.exports = router;
