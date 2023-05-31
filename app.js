const express = require('express');
const cadastroProdutos = require('./cadastro_produtos')
const app = express();
const PORTA = 3000;

const produtos = [{id:1, nome: "Produto 1", preco: 30}];

app.use(express.json());

//Recurso: Produtos
app.get('/produtos', (req, res) => {
    const listaProdutos = cadastroProdutos.listar();
    res.json(listaProdutos);
})

app.get('/produtos/:id', (req,res) => {
    const id = req.params.id;
    try{
        const produto = cadastroProdutos.buscarPorId(id);
        res.json(produto);
    } catch (err) {
        res.status(err.numero).json(err);
    }
})

app.post('/produtos', (req, res) => {
    const produto = req.body;

    try{
        const produtoInserido = cadastroProdutos.inserir(produto);
        res.status(201).json(produtoInserido);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
})

app.put('/produtos/:id', (req,res) => {
    const id = req.params.id;
    const produto = req.body;
    try{
        const produtoAtualizado = cadastroProdutos.atualizar(id,produto);
        res.json(produtoAtualizado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }

})

app.delete('/produtos/:id', (req,res) => {
    const id = req.params.id;
    try{
        const produtoDeletado = cadastroProdutos.deletar(id);
        res.json(produtoDeletado);
    }
    catch (err) {
        res.status(err.numero).json(err);
    }
})

app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso...")
})