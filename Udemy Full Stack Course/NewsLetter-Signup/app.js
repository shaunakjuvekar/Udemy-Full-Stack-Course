const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    
    var firstName = req.body.Firstname;
    var lastName  = req.body.Lastname;
    var email     = req.body.Email;
    
    console.log(firstName, lastName, email);

})



app.listen(3000,function(){
    console.log("Server is running on port 3000");
})


// API KEY
// 47d815ec9fc7034781a2e08f10625b3e-us19