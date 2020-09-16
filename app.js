//importing express and definition
const express = require("express");
//body-parser to parse html content from text box 
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
    console.log(req.body.phrase);
    
    // input from the body element 
    let phrase = String(req.body.phrase);
    let userInput = phrase;
   //using regex replace method to search for specific words and replacing with ©
    let result = userInput.replace(/Google|Amazon|Deloitte|Microsoft|Oracle/g, '$&©');
    console.log(result);
//posting result to server the response
    res.send(result);

});


app.listen(3211, function(){
    console.log("Serving on 3211");
});
