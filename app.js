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

    let regexC = /Cloud/i;
    //let regex1 = /Google/i;
    //let regex2 = /Microsoft/;
    //let regex3 = /Amazon/;
    //let regex4 = /Facebook/;
    //let regex5 = /Deloitte/;
      let rsp = regexC.test(phrase);
    //if regexex1.test(phrase)) === true){


    if (rsp === true){
      //  result 
    //}

    let result = phrase.replace(regexC, "Cloud©");
    console.log(result);
    res.send(result);
}
else {    
    res.send(phrase);
}
});


app.listen(3211, function(){
    console.log("Serving on 3211");
});
