import express from "express";

const app = express();
const host = "0.0.0.0";
const porta = 3000;



function paginaInicial(requisicao, resposta){
    resposta.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Página inicial</title>                
        </head>
        <body>
            <h1> Página inicial </h1>
        </body>
        </html>              
        `);
    resposta.end();

}

app.get('/', paginaInicial);

app.listen(porta,host, () => {
    console.log(`Servidor executanto em http://${host}:${porta}.`)
});