const express = require('express');
const db = require('./firebase')    
const router=express.Router()

router.get("/articulos", (req,res)=>{  

    const articulos=[]

                    

    db.collection('articulos').get().then(docs =>{
        docs.forEach(doc => {
            let articulo={}                                      //cuidado que js apunta las variables aun puntero, hay que inicializar dentro para asignar otra direccion de memoria
            articulo['id']=doc.id;
            articulo['ean13']= doc.data().ean13;
            articulo['nombre']= doc.data().nombre;
            articulo['precio']= doc.data().precio;
            articulos.push(articulo)
    });
        res.send({status: "ok", articulos});
    }
    ).catch(err=>{
        res.send({status: "error"});
    })

})
router.get("/pedidos", (req,res)=>{

    const pedidos=[]

    db.collection('pedidos').get().then(docs =>{
        docs.forEach(doc => {
            let pedido={}                                      //cuidado que js apunta las variables aun puntero, hay que inicializar dentro para asignar otra direccion de memoria
            pedido['id']=doc.id;
            pedido['articulos']= doc.data().articulos;
            pedido['fecha']=doc.data().fecha;
            pedidos.push(pedido)
    });
        res.send({status: "ok", pedidos});
    }
    ).catch(err=>{
        res.send({status: "error"});
    })
})
router.post("/pedidos", (req,res)=>{  

    
        
            db.collection('pedidos').doc().set({fecha: req.body.fecha, articulos: req.body.articulos}).then(response =>{
                res.send({status: "ok"});
            }).catch(err =>{
                res.send({status: "error"});
            });
    
    
        }
)
module.exports=router