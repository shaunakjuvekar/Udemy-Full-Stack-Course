const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {

    const firstName = req.body.Firstname;
    const lastName = req.body.Lastname;
    const email = req.body.Email;

    const url = "https://us19.api.mailchimp.com/3.0/lists/2301d31517";

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }]
    }

    const jsonData =  JSON.stringify(data)  

    const options = {
        method: "post",
        auth: "shaun1:47d815ec9fc7034781a2e08f10625b3e-us19"
    }

    const request = https.request(url,options,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
})



app.listen(3000, function () {
    console.log("Server is running on port 3000");
})


// API KEY  
// 47d815ec9fc7034781a2e08f10625b3e-us19

// List ID
// 2301d31517