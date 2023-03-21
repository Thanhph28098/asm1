import express from "express"
import productRouter from "./router/product"
import dotenv from "dotenv"
import mongoose from "mongoose"


dotenv.config()
const app = express()

app.use(express.json())
app.use("/api", productRouter)
mongoose.connect("mongodb://127.0.0.1:27017/testasm1")
export const viteNodeApp = app