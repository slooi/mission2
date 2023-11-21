import { Request, Response } from "express"
import { getTagsFromImageUrl } from "../2_components/service_getTagsFromImageUrl"

const controller_getImageTags = async (req:Request,res:Response)=>{
	console.log("hi sussy")
	const tags = await getTagsFromImageUrl()
	console.log("tags")
	console.log("tags")
	console.log(tags)
	res.json(tags)
	// console.log(typeof a)
	// res.json(a)
}

export {controller_getImageTags}