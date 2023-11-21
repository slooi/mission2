import express from "express"
import { router_apiMaster } from "./api/router_apiMaster"

const app = express()




// Middleware
app.use(express.json())	// Allow server to parse incoming json data

// Routes
// app.get("/",(req,res)=>{
// 	res.send("lol")
// })


// Midleware Routes
app.use(router_apiMaster)



export {app}