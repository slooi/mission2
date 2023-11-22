import { Request, Response } from "express"
import { getTagsFromImageUrl } from "../2_components/service_getTagsFromImageUrl"
import "dotenv/config"

const controller_getImageTags = async (req:Request,res:Response)=>{
	const imageUrl = `${process.env.SERVER_IP}/public/img.jpg`;
	const tags = await getTagsFromImageUrl(imageUrl)
	res.json(tags)
}

export {controller_getImageTags}