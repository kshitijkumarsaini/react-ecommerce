const express = require('express');
const data = require('./data');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/api/products', (req, res, next) => {
    res.send(data.products);
});


app.get('/api/product/:id', (req, res, next) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }
});


app.get('/', (req, res, next) => {
    res.send('Server is Ready');
});


app.listen(PORT, () => {
    console.log('Serve at host 5000');
});