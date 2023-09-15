require('dotenv').config()
const express = require('express')
const app = express();
const PORT = 8080
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const mongoose = require('./config/mongoDB')

const routes = require('./routes')


app.use('/',routes.userRoutes)


app.listen(PORT,()=>{
    console.log('Server started');
})
