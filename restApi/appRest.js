const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
app.use(bodyParser.json());




app.use("/", require("./lista.js"))      
app.use(express.static('public'));


app.listen(8085,()=>{
    console.log("Servicio Rest Api")
})
