const express=require('express');
 app=express();
 

 //get method
 app.get("/",function(req,res){
     res.send("Welcome");
 })

 //post method
 app.post("/about",function(req,res){
    res.send("About myself");
})
  

//status code
app.get("/status",function(req,res){
    res.status(201);
    res.end("this is a status code");
})

 //download response
 app.get("/download",function(req,res){
    res.download("./image/xyz.jpg");
})

//redirect response
app.get("/bangladesh",function(req,res){
    res.redirect("http://localhost:5100/india")
})
app.get("/india",function(req,res){
    res.send("this is a india")
}) 
  
//head response
app.get("/head",function(req,res){
    res.append("name","pk")
    res.end()
})
 //cookie response
 app.get("/cookie",function(req,res){
    res.cookie('name','emon ahmed')
    res.end("this is a cookies")
})
//clear cookie response
app.get("/clearCookie",function(req,res){
    res.clearCookie('name')
    res.end("clear cookies")
})

//query request
app.get('/query',function(req,res){
    let fn=req.query.firstName;
    let ln=req.query.lastName;
    res.send(fn+" "+ln);

})
//head request
app.get('/headReq',function(req,res){
    let fn=req.head.firstName;
    let ln=req.head.lastName;
    res.send(fn+" "+ln);

})

//Json response
app.get("/json",function(req,res){
    const myJson=[
        {
            name:"emon",
            age:"23"
        },
        {
            name:"sumon",
            age:"25"
        }
    ]
    res.json(myJson);
    res.end();
})
 
 
 app.listen(5302,function(){
     console.log("done");
 })