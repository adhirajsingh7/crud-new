require('dotenv').config()
const express = require('express')
const app = express();
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mongoose = require('./config/mongoDB')

const routes = require('./routes')


app.use('/',routes.userRoutes)




app.listen(PORT,()=>{
    console.log('Server started');
})
