import express from "express"
import { router_imageAnalysis } from "./0_routers/router_imageAnalysis"

const router_apiV1 = express.Router()


// ##########################################################################
//		ADD ALL THE ROUTERS YOU WANT TO HAVE AVAIABLE FOR /api/v1
// ##########################################################################
router_apiV1.use("/v1",router_imageAnalysis)




export {router_apiV1}