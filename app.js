const express = require('express');
const app = express();
const dontenv = require('dotenv');
const path = require('path')
const connectDatabase = require('./config/connectDatabase')
const produts = require('./routes/Products')
dontenv.config({path: path.join(__dirname, 'config', 'config.env')})

connectDatabase();

app.use(express.json())
app.use('/api/v1/' , produts)



app.listen(process.env.PORT, ()=>{
    console.log(`server run ${process.env.PORT} in ${process.env.NODE_ENV}`)
})