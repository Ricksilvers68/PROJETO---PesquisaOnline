const express = require("express")
const multer = require("multer")
const router = express.Router()


const storage = multer.diskStorage({
    destination: function(req, file, cb){  //COLOCAR O UPLOAD COMO UM MIDDLEWARE..E DELETAR ESTA PASTA
        cb(null, "./upload")
    },
    filename: function(req, res, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

app.get("/", (req,res)=>{
    res.render("form")
})
                                         
app.post("/upload", upload.single("file"), (req,res)=>{ 
    res.send("Arquivo recebido!!")
})