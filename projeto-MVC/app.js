//require apps 
const express = require("express")
const mongoose = require("mongoose")
const port = 8000
const app = express()

//define motor de visualizacao
app.set("view engine", "ejs")
app.set("views", __dirname, "/views")
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//conexao com o DB
mongoose.connect("your db!", {
  useNewUrlParser:true,
  useUnifiedTopology: true
})

//importa a rota do routers/produtos-router
const router = require("./routers/produtos-router")


app.use("/produtos", router)

// rota pag inicial 
app.get("/",(req,res)=>{
  res.send("pag inicial ")
})

//conexao com o servidor
app.listen(port,()=>{
  console.log(`servidor rodando na porta ${port}`)
})