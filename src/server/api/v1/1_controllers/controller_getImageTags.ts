import { Request, Response } from "express"
import { getTagsFromImageUrl } from "../2_components/service_getTagsFromImageUrl"

const controller_getImageTags = async (req:Request,res:Response)=>{
	const imageUrl = 'https://i.pinimg.com/736x/23/f0/df/23f0df9cfe3275fe9c628cd36f09cbc6.jpg';

	const tags = await getTagsFromImageUrl(imageUrl)
	res.json(tags)
}

export {controller_getImageTags}