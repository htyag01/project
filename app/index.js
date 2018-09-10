var express = require('express');
var app = express();
var Port = 3000;
//Middleware
app.use(express.static('public'));
app.listen(Port,function(){
    console.log("Sever running on",Port);
});

