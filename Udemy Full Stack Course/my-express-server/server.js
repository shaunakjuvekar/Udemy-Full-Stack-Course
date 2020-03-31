const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello World!</h1>");
})

app.get("/about",function(req,res){
    res.send("<h1>This is Shaunak </h1><p>Creative, hardworking and analytical person</p>");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
});

