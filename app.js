const express = require('express');
const app = express();
const PORTA = 3000;

//Recurso: Produtos

app.get('/produtos', (req, res) => {
    res.send("Listagem de Produtos");
})

app.get('/produtos/:id', (req,res) => {
    const id = req.params.id;
    res.send(`Buscar pelo id: ${id}`);
})

app.post('/produtos', (req, res) => {
    res.send("Cadastrar Produto");
})

app.put('/produtos/:id', (req,res) => {
    const id = req.params.id;
    res.send(`Atualizar o produto com id: ${id}`);
})

app.delete('/produtos/:id', (req,res) => {
    const id = req.params.id;
    res.send(`Deletar o produto com id: ${id}`);
})

app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso...")
})