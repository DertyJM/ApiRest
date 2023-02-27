const express = require('express');
const app = express();
const hbs= require("hbs")
const axios = require('axios')
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))



hbs.registerPartials(__dirname + '/views/partials', function (err) {})
app.set('view engine', 'hbs');
app.set('views',__dirname + "/views")  



app.use("/", require("./lista"))  






app.listen(8088,()=>{
    console.log("Conexion con la restAPI")
})

//servicio a articulos y pedidos 2 modulos
//uno get y otro get/post
//get articulos devolver en json(res.send(objeto js)) status(error o ok) rows[objetos de pedidos y objetos de articulos]
