import joi from "joi"
import Product from "../model/product"
import express from "express"
import dotenv from "dotenv"

dotenv.config()


const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
})
export const getAll = async (req,res) =>{
    try {
        const products = await Product.find()
        if(products.length === 0){
            return res.json({
                message: "Ko co sp "
            })
        }
        return res.json(products)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const get = async (req,res) =>{
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.json({
                message: "Ko co sp "
            })
        }
        return res.json(product)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const create = async (req,res)=>{
    try {
        const {error} = productSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }

        const product = await Product.create(req.body)
        if(!product){
            return res.json({
                message:"them ko thanh cong"
            })
        }
        return res.json({
            message:"them thanh cong",
            data: product
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}


export const update = async (req,res)=>{
    try {
        const {error} = productSchema.validate(req.body)
        if(error){
            return res.status(400).json({
                message: error.details[0].message
            })
        }

        const product = await Product.updateOne({_id: req.params.id},req.body)
        if(!product){
            return res.json({
                message:"cap nhat ko thanh cong"
            })
        }
        return res.json({
            message:"cap nhat thanh cong",
            data: product
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const remove = async (req,res)=>{
    try {
        await Product.deleteOne({_id: req.params.id})
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}