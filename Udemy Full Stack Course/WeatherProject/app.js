const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get("/",function(req,res){

    res.sendFile(__dirname+"/index.html")

    
})

app.post("/",function(req,res){


    const cityName = req.body.cityName;
    const apiKey = "1f661e1dce175da0c533091e936d8ee8"
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+ apiKey+"&units=metric"
   
    https.get(url,function(response){

        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;

            const icon = weatherData.weather[0].icon;
            
           
            res.write("<h1>The temperature in " + cityName + " is " + temp + " Degree Celsius</h1>");
            res.write("<p>The weather description is currently: " + description +"</p>");
            const imgurl = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
            res.write("<img src="+imgurl+">");     

            res.send();
 
        })

    })

})

app.listen(3000,function(){
    console.log("Server running at post 3000");
})

//API key :-
//1f661e1dce175da0c533091e936d8ee8