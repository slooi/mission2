import { Request, Response } from "express"
import { getTagsFromImageUrl } from "../2_components/service_getTagsFromImageUrl"
import "dotenv/config"
import { AzureTagArray } from "../2_components/model_azureTagArray";
import { service_findCarTypeOfHighestConfidence } from "../2_components/service_findCarTypeOfHighestConfidence";

const controller_getImageTags = async (req:Request,res:Response)=>{

	if (req.file) {
		const userSpecifiedFileName = req.file.originalname;
		// console.log(userSpecifiedFileName)
		// console.log("User-specified filename:", userSpecifiedFileName);


		// res.send("you're supposed to get a list image urls so client can fetch")

		const imageUrl = `${process.env.SERVER_IP}/public/userUploads/${userSpecifiedFileName}`;
		const tags = await getTagsFromImageUrl(imageUrl)	
		
		try{
			const azureTagArray = AzureTagArray.parse(tags)

			const filteredTagArray = service_findCarTypeOfHighestConfidence(azureTagArray)
			res.status(200).json(filteredTagArray)
		}catch(err){
			res.status(400).json({ error: "Tags did not match AzureTagArray model!" });
		}
	} else {
		res.status(400).json({ error: "No file uploaded" });
	}
}


// #################### DEV VERSION #################
const controller_getImageTagsDev = async (req:Request,res:Response)=>{
	const imageUrl = `${process.env.SERVER_IP}/public/img.jpg`;
	const tags = await getTagsFromImageUrl(imageUrl)
	res.json(tags)
}

export {controller_getImageTags,controller_getImageTagsDev}