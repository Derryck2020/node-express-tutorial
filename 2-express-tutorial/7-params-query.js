const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) =>{
    res.send('<h1>Home Page</h1><a href="/api/products"> products</a>')
})

app.get('/api/products', (req, res) =>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProducts)
})

//Providing info about one specific product
/*
app.get('/api/products/1', (req, res) =>{
    const singleProduct = products.find((product) => product.id === 1)

    res.json(singleProduct)
})
*/

//Using route parameters to access any given response
app.get('/api/products/:productID', (req, res) =>{
    //console.log(req)
    //console.log(req.params) //this returns a string, it has to be changed into a Number
    const {productID} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID))

    if(!singleProduct){
        res.status(404).send('Product does not exist')
    }

    res.json(singleProduct)

})

//a more complex route parameters
app.get('/api/products/:productID/reviews/:reviewID', (req,res) =>{
    console.log(req.params)
    res.send('Hello World')
})

//dealing with query string parameters
app.get('/api/v1/query', (req,res) =>{
    //console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1){
        //res.status(200).send('no products match your search') 
        return res.status(200).json({sucess: true, data: []})
    }

    res.status(200).json(sortedProducts)
})

app.listen(5000, () =>{
    console.log('Server is listening on port 5000...')
})