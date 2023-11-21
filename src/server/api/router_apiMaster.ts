import express from "express"
import { router_apiV1 } from "./v1/router_apiV1"

const router_apiMaster = express.Router()

router_apiMaster.use("/api",router_apiV1)

export {router_apiMaster}