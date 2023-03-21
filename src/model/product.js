
import mongoose from "mongoose"

 const productSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    price:{
        type: Number
    },
})

export default mongoose.model("Product", productSchema)