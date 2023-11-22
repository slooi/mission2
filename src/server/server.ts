import express from "express"
import { router_apiMaster } from "./api/router_apiMaster"
import path from "path"
import { fileURLToPath } from 'url';
const express_app = express()


const __dirname = path.dirname(fileURLToPath(import.meta.url))



// Middleware
express_app.use(express.json())	// Allow server to parse incoming json data
express_app.use("/public",express.static(path.join(__dirname,"..","client","public")))
// express_app.use(express.static(path.join(__dirname,"public")))

// Routes
express_app.get("/",(req,res)=>{
	console.log("hi!")
	res.send("lol")
})


// Midleware Routes
express_app.use(router_apiMaster)



export {express_app}