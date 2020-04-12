
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true , useUnifiedTopology: true } );

const personSchema = new mongoose.Schema(
    { name:
        {
        type: String,
        required: [true, "Check whether name is given!"]
        },
        rating: Number,
        review: String
    }
);

const Fruit = mongoose.model("Fruit",personSchema);

const fruit = new Fruit(
    {
        
        rating: 4,
        review: "Overated!"
    }
)

fruit.save();
// const fruit = [
//     {
//     name: "Apple",
//     rating: 9,
//     review: "Excellent" 
//     },
//     {
//         name: "Orange",
//         rating: 5,
//         review: "Too sour for me" 
//     },
//     {
//         name: "Banana",
//         rating: 7,
//         review: "Good" 
//     }
// ];

Fruit.find(function(err,data){
    if(err){
        console.log(err);
    }
    else{
        data.forEach(function(entry){
            console.log(entry.name);
        })
    }
    mongoose.connection.close();
})


// Fruit.insertMany(fruit, function(error, docs) {
//     if (error){
//         console.log(error)
//     }
//     else{
//         console.log("Fruits inserted successfully");
//     }
// });


//fruit.save();
