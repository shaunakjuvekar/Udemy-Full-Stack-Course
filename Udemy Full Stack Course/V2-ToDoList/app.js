//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", { useNewUrlParser: true , useUnifiedTopology: true } )

const itemsSchema = new mongoose.Schema(
  {
    name : String
  })

const Item = mongoose.model('Item',itemsSchema);



const defaultItems = [ { name : "Welcome to my todolist!" },
{ name: "Hit the + icon to add items to list"}, { name: "Check the checkbox to delete item from list"}
]

app.get("/", function(req, res) {


//const day = date.getDate();
  Item.find(function(err,foundItems){
    if (foundItems.length===0){
       console.log("List is empty, inserting default items...");
        Item.insertMany(defaultItems,function(err){
        if(err){
          console.log(err)
        }
        else{
          res.render("list", {listTitle: "Today", newListItems: defaultItems});
        }
      })
    }
    else{
       res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
})

});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const item = new Item(
    {
    name:itemName
  })
  item.save();
  res.redirect("/");
});

app.post("/delete",function(req,res){
  const id = req.body.checkbox
  Item.findByIdAndDelete(id,function(err){
    if(err){
      console.log(err)
    }
    else{
      console.log("Deleted record");
      res.redirect("/");
    }
  } )
})

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
