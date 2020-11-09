const express = require('express');
const app = express();

app.get('/home', function(req,res){
    console.log("Home api called...");
});

app.listen(8000, function() { 
    console.log("Running on port 8000...");
});
