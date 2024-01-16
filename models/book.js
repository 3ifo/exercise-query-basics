import mongoose from "mongoose";
const {Schema, SchemaTypes, model} = mongoose

const bookSchema = new Schema({
    titolo: String,
    anno: Number,
    pagine: Number,
    author: {
        type: SchemaTypes.ObjectId,
        required: true,
        ref: "Author"

    }
})

const Book = model("Book", bookSchema)


export default Book