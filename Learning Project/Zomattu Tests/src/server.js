const express = require("express");
const path = require('path');

const app = express();

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '..\page\Home_Page.html'));
})
app.listen(3000, function(){
    console.log("Server started");
});

