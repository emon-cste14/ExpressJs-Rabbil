const express = require('express');
const bodyParser = require('body-parser');
var multer  = require('multer')
var app = express();
var multer = multer()

app.use(multer.array())
app.use(express.static('public'))
app.post('/',function(req,res){
    let jsonData=req.body;

   res.send(JSON.stringify(jsonData))
})
app.listen(1001,()=>console.log("done"))