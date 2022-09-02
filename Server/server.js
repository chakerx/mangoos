
const express=require ('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const routess=require('./Create')

const app=express()
dotenv.config()

app.use('/api/users',routess)
mongoose.connect(process.env.URI,err=>err? console.log(err) : console.log(`The Db is connected`))

const PORT= process.env.PORT
app.listen(PORT,err=>err? console.log(err) : console.log(`Server is working on port ${PORT}`))