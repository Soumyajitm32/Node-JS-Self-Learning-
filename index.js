
const fs = require('fs')

const index = fs.readFileSync("index.html", "utf-8")
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"))
const products=data.products
const express = require('express')
const server=express()

const auth=(req,res,next)=>{
    console.log(req.query)
    if(req.query.password=='123'){
        next()
    }
    else{
        res.sendStatus(401)
    }
}


server.use(auth)

//API-Endpoint-Route
server.get('/',(req,res)=>{
    res.json({type:'GET'})
   

})
server.post('/',(req,res)=>{
    res.json({type:'POST'})
   

})
server.put('/',(req,res)=>{
    res.json({type:'PUT'})
   

})
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
   

})
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'})
   

})



server.listen(8080,()=>{
    console.log("Server Started")
})

