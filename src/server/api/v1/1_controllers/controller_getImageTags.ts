import { Request, Response } from "express"
import { getTagsFromImageUrl } from "../2_components/service_getTagsFromImageUrl"

const controller_getImageTags = async (req:Request,res:Response)=>{
	const imageUrl = 'https://images-ext-2.discordapp.net/external/B7IMUnRH_Ov0yswFCdnOBqYw6TDrYtU_tMlFosEdV_M/https/pbs.twimg.com/media/F_aOvDDaIAAsXuA.jpg?width=593&height=639';

	const tags = await getTagsFromImageUrl(imageUrl)
	console.log("tags")
	console.log(tags)
	res.json(tags)
}

export {controller_getImageTags}