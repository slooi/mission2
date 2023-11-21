import express from "express"

const router_apiV1 = express.Router()

router_apiV1.get("/v1",(req,res)=>{
	res.send("This is router_apiv1!")
})

export {router_apiV1}