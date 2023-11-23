import { Request, Response } from "express"
import { getTagsFromImageUrl } from "../2_components/service_getTagsFromImageUrl"
import "dotenv/config"
import { AzureTagArray } from "../2_components/model_azureTagArray";
import { service_checkIfCarTypeExistsInDb } from "../2_components/service_checkIfCarTypeExistsInDb";
import { service_generateAnArrayOfImageUrlsFromCarTypes } from "../2_components/service_createTagUrlArray";

const controller_getImageTags = async (req:Request,res:Response)=>{
	if (req.file) {
		const userSpecifiedFileName = req.file.originalname;
		const imageUrl = `${process.env.SERVER_IP}/public/userUploads/${userSpecifiedFileName}`;
		const tags = await getTagsFromImageUrl(imageUrl)	
		
		try{
			const azureTagArray = AzureTagArray.parse(tags)

			const filteredTagArray = service_checkIfCarTypeExistsInDb(azureTagArray)
			console.log("filteredTagArray")
			console.log(filteredTagArray)

			const names = filteredTagArray.map(tagItem=>tagItem.name)
			console.log("names")
			console.log(names)
			const imageUrls = await service_generateAnArrayOfImageUrlsFromCarTypes(names)
			console.log(imageUrls)
			res.status(200).json(imageUrls)
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