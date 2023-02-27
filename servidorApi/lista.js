const express = require('express');
const router=express.Router()
const axios = require('axios')

router.get("/articulos", (req,res)=>{
    
    const url="http://localhost:8085/articulos"
   
    axios.get(url).then(response =>{                                          
      
        res.render("articulos", {articulos: response.data.articulos})
    }).catch(err=>{
        res.render("articulos")
    })
    })
router.get("/pedidos", (req, res)=>{
    
    const url="http://localhost:8085/pedidos"
    
    axios.get(url).then(response =>{                                               
       

        res.render("pedidos", {pedidos: response.data.pedidos})
    }).catch(err=>{
        res.render("pedidos")
    })

})

router.post("/pedidos",(req, res)=>{
    
    const url="http://localhost:8085/pedidos"
    const fecha = new Date().toISOString().slice(0, 10);
    
    articulos=[]
    req.body.articulos.forEach(element => {
        if(element.cantidad>0){
            articulos.push(element);
        }
        
    });
    const pedido={fecha,articulos:articulos }    
    axios.post(url ,pedido).then(res2 =>{                    //no llamarla igual que el res
        console.log("OK")                               
        res.redirect("pedidos");
    }).catch(err=>{
        res.send("hola")
    })
})
    module.exports= router
 