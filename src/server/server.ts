import express from "express"
import { router_apiMaster } from "./api/router_apiMaster"

const express_app = express()




// Middleware
express_app.use(express.json())	// Allow server to parse incoming json data

// Routes
// express_app.get("/",(req,res)=>{
// 	res.send("lol")
// })


// Midleware Routes
express_app.use(router_apiMaster)



export {express_app}