const express = require("express");

const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
   res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res){
    console.log(req.body.phrase);
    
    
    let phrase = String(req.body.phrase);
   // let regexArray = (/Google/, /Microsoft/, /Amazon/, /Facebook/, /Deloitte/ );

    //let regexC = /Cloud/i;
    //let regex1 = /Google/i;
    //let regex2 = /Microsoft/;
    //let regex3 = /Amazon/;
    //let regex4 = /Facebook/;
    //let regex5 = /Deloitte/;
      //let rsp = regex1.test(phrase);
    //if regexex1.test(phrase)) === true){


    //if (rsp === true){
      //  result 
      let userInput = phrase;
      let result = userInput.replace(/Google|Amazon|Deloitte|Microsoft|Oracle/g, '$&©');
      console.log(result);


    //let result = phrase.replace(/Google|Microsoft|Deloitte|Amazon|Oracle|/g, '$&©');
    //console.log(result);
    res.send(result);

});


app.listen(3211, function(){
    console.log("Serving on 3211");
});
