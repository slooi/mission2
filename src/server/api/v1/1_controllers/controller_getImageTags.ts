import { Request, Response } from "express"
import { getTagsFromImageUrl } from "../2_components/service_getTagsFromImageUrl"

const controller_getImageTags = async (req:Request,res:Response)=>{
	const tags = await getTagsFromImageUrl()
	console.log("tags")
	console.log(tags)
	res.json(tags)
}

export {controller_getImageTags}