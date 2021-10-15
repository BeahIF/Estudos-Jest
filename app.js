const express = require("express")
const todoRoutes = require("./routes/todo.routes")
const app = express()
app.use("/todos",todoRoutes)
app.get("/", (req,res)=>{
    res.send("Hello world!")
})

app.listen(3000, ()=>{
    console.log("Server working!")
})