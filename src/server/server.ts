import express from "express"
import { router_apiMaster } from "./api/router_apiMaster"
import path from "path"
import { fileURLToPath } from 'url';
import multer from "multer";

const express_app = express()


const __dirname = path.dirname(fileURLToPath(import.meta.url))



// Middleware
express_app.use(express.json())	// Allow server to parse incoming json data
express_app.use("/public",express.static(path.join(__dirname,"..","client","public")))
express_app.use("/public",express.static(path.join(__dirname,"..","client","public")))
// express_app.use(express.static(path.join(__dirname,"public")))



const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, path.join(__dirname,"..","client","public"));
		},
		filename: (req, file, cb) => {
			// Use the originalname provided by the user as the filename
			cb(null, file.originalname);
		},
	}),
});

express_app.post("/upload", upload.single("photo"), (req, res) => {
	if (req.file) {
		const userSpecifiedFileName = req.file.originalname;
		console.log("User-specified filename:", userSpecifiedFileName);

		res.send("you're supposed to get a list image urls so client can fetch")
	} else {
		res.status(400).json({ error: "No file uploaded" });
	}
});


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