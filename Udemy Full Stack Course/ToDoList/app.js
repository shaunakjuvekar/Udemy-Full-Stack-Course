const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.set("view engine","ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

var items = [];
var workList = [];

app.get("/", function (req, res) {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-US",options)
    res.render("list",{listTitle: day, Listitems: items});
})

app.post("/",function(req,res){
  var item = req.body.newItem;
  console.log(req.body)
  if(req.body.list=="Work"){
      workList.push(item);
      res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }


})

app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work List", Listitems: workList});
})

app.get("/about",function(req,res){
  res.render("about");
})
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
})
