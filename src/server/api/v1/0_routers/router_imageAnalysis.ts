import express from "express"
import { controller_getImageTags } from "../1_controllers/controller_getImageTags"

const router_imageAnalysis = express.Router()

// router_imageAnalysis.use("/",(req,res,next)=>{
// 	console.log("adkajl")
// 	next()
// })

router_imageAnalysis.get("/imageanalysis/tags",controller_getImageTags)

export {router_imageAnalysis}