var fs=require("fs");
/*var data=fs.readFile("haha.txt","utf-8",function(err,data){
    if(err)
        throw err;
    console.log(data);
});*/

var data=fs.readFile("app.js","utf-8",function(err,data){
    if(err)
        throw err;
    console.log(data);
});