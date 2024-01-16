import mongoose from "mongoose";
const {Schema,  model} = mongoose

const addressSchema = new Schema({
    via: String,
    civico: Number,
    città: String,
    codicePostale: Number
})


const authorSchema = new Schema({
    nome: String,
    age: Number,
    address: {
        type: addressSchema,
        required: true
    },
    numero: Number,
    nascita: Date,
    nazionalità: String
})

const Author = model("Author", authorSchema)


export default Author