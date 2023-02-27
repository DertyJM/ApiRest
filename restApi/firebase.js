const {initializeApp,cert} = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
let serviceAccount = require(__dirname+"/firebaseClave.json");   //cuenta de servicio
initializeApp({
    credential : cert(serviceAccount)                             //inicializarla
});
console.log("inicializado");

module.exports =  getFirestore();                             //exporta la conexion a la base de datos

//
