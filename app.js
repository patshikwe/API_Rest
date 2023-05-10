// Application backend

const express = require("express"); //Appel de la méthode express
const app = express(); //Création de l'instance

// point de terminaison, méthode get, route racine
app.get("/",(req, res)=> {
    console.log("Coucou, c'est moi!")
})


app.listen(3000); //Création du serveur
console.log("Ecoute du serveur au port 3000");