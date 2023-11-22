import express from "express"
import { controller_getImageTags, controller_getImageTagsDev } from "../1_controllers/controller_getImageTags"
import multer from "multer";
import path from "path"
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const router_imageAnalysis = express.Router()

// router_imageAnalysis.use("/",(req,res,next)=>{
// 	console.log("adkajl")
// 	next()
const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, path.join(__dirname,"..","..","..","..","client","public","userUploads"));
		},
		filename: (req, file, cb) => {
			// Use the originalname provided by the user as the filename
			cb(null, file.originalname);
		},
	}),
});
// })

router_imageAnalysis.get("/imageanalysis/tags/dev",controller_getImageTagsDev)
router_imageAnalysis.post("/imageanalysis/tags", upload.single("photo"),controller_getImageTags)

export {router_imageAnalysis}