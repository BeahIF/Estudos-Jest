const express = require("express")
const todoRoutes = require("./routes/todo.routes")
const app = express()
const mongodb = require("./mongodb/mongodb.connect")
mongodb.connect()
app.user(express.json)
app.use("/todos",todoRoutes)
app.use((error,req,res, next)=>{

})
app.get("/", (req,res)=>{
    res.send("Hello world!")
})

