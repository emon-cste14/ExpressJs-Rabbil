const express=require('express');
const multer=require('multer');
const app=express();

const storage=multer.diskStorage({
    function (req,file,callBack) {
        callBack(null,'./Upload');
        
    },
    function(req,file,callBack){
        callBack(null,file.originalname)
    }
});
const Upload=multer({storage:storage}).single('myfile')
app.post('/',function(req,res){
    Upload(req,res,function(error){
        if(error){
            res.send("file upload fail")
        }
        else{
            res.send("file upload done")
        }
    })

});
app.listen(3333,()=>console.log("done"))