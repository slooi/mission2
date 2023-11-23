import express from "express"
import { router_apiMaster } from "./api/router_apiMaster"
import path from "path"
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const express_app = express()



// generateAnArrayOfImageUrlsFromCarTypes(["super","suv"])


// Middleware
express_app.use(express.json())	// Allow server to parse incoming json data
express_app.use("/public",express.static(path.join(__dirname,"..","client","public")))
express_app.use("/public",express.static(path.join(__dirname,"..","client","public")))
// express_app.use(express.static(path.join(__dirname,"public")))






// Routes react route
// express_app.get("/",(req,res)=>{
// 	console.log("hi!")
// 	res.send("lol")
// })

// Routes normal route
express_app.get("/",(req,res)=>{
	console.log("hi!")
	res.sendFile(path.join(__dirname,"..","client","index.html"))
})


// Midleware Routes
express_app.use(router_apiMaster)



export {express_app}