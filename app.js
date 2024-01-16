import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import morgan from "morgan"
import Book from "./models/book"


dotenv.config()
const MONGO_INFO= process.env.MONGO_INFO
mongoose.connect(MONGO_INFO)
const app = express()

app.listen(3000, ()=> {
    console.log("Server in ascolto sulla porta 3000")
})
app.use(morgan("dev"));

app.get("/books", async(req,res)=> {
    try {
        const book = await Book.find();
        res.send(book)
    }catch(error){
        res.status(500).send(error.message);
    }
})


app.get("/authors", async(req,res)=> {
    try {
        const author = await Author.find();
        res.send(author)
    }catch(error){
        res.status(500).send(error.message);
    }
})


app.post("/books", async(req,res)=> {
    try{
        const newBook = req.body
        const book= await Book.create(newBook)
        res.send(book)
    }catch(error){
        res.status(404).send(error.message)
    }
})

app.post("/authors", async(req,res)=> {
    try{
        const newAuthor = req.body
        const author= await Author.create(newAuthor)
        res.send(author)
    }catch(error){
        res.status(404).send(error.message)
    }
})