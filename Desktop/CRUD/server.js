const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/productModel')
require('dotenv').config()

const app = express();
const URL_CONNECT = process.env.URL_CONNECT;
const PORT = process.env.PORT;

app.use(express.json())

app.listen(3000,() => {
    console.log('server activo');
})

//PUT actualizar
app.put('/product/:id',async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            return res.status(404).json ({messege: `cannot find id ${id}`})
        }
        res.status(200).json(productUpdated)
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//POST agregar producto
app.post('/product',async (req,res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)

    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//GET recuperar productos
app.get('/products',async (req,res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//GET recuperar producto
app.get('/product/:id',async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//DELETE recuperar producto
app.delete('/product/:id',async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json ({messege: `cannot find id ${id}`})
        }
        res.status(200).json(product)
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/', (req, res) => {
    res.send('Hola desde/')
})

mongoose.connect(URL_CONNECT)
.then(() => {
    console.log('conectado a la base');
})
.catch(error => {
    console.log(error);
})