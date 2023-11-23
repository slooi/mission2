/* 
	Goal:
	- This service simply converts this:
	[
		{ name: 'hatchback', confidence: 0.9454644918441772 },
		{ name: 'familycar', confidence: 0.8758280277252197 },
		{ name: 'supermini', confidence: 0.8744406700134277 },
		{ name: 'compactmpv', confidence: 0.8464362621307373 }
	]
	- Into 
	[
		{ name: 'hatchback', confidence: 0.9454644918441772, url:"/public/imgs/suv0.webp"},
		{ name: 'familycar', confidence: 0.8758280277252197 },
		{ name: 'supermini', confidence: 0.8744406700134277 },
		{ name: 'compactmpv', confidence: 0.8464362621307373 }
	]


	NO! It's not a one-to-one mapping!
	Get all images even if they have a low confidence rating!
*/

import { flushSync } from "react-dom";
import { AzureTagArray, TagUrlItem } from "./model_azureTagArray";
import fs from "fs"
// import {globby} from 'globby';

import path from "path"
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url))



// export const service_createTagUrlArray = (tagArray:AzureTagArray)=>{
// 	const tagUrlArray = tagArray.map(tagItem=>{
// 		const newTagItem:TagUrlItem = {...tagItemm, url:}
// 		newTagItem.url = ""
// 	})
// }
const rootPathFromDirname = path.join(__dirname, "..", "..", "..", "..")
const publicPathFromRoot = path.join("client", "public")

export const generateAnArrayOfImageUrlsFromCarTypes = async (carTypes: string[]) => {
	/* 
		INPUT(STRING): hatchback
		OUTPUT(array<string>): [
			"/public/imgs/suv0.webp",
			"/public/imgs/suv1.webp"
		]
		Note, carModel might not exist
	*/

	// Get files from folder
	const directoryPath = path.join(rootPathFromDirname, publicPathFromRoot, "imgs");
	const files = await getFilesFromFolder(directoryPath)
	
	// Filter to only include wanted car types
	let filteredFiles = getFilesContainCarTypes(files,carTypes)

	// Attach public path so client can access
	const filesWithPublicPath = filteredFiles.map(filteredFile=>"/public/imgs/"+filteredFile)
	console.log(filesWithPublicPath)
	return filesWithPublicPath
}	
function getFilesContainCarTypes(files:string[], carTypes:string[]) {
	var filteredFiles = new Set<string>()
	for (let i = 0; i < carTypes.length; i++) {
		for (let j = 0; j < files.length; j++) {

			if (files[j].includes(carTypes[i])) {
				filteredFiles.add(files[j])
			}
		}
	}
	return Array.from(filteredFiles)
}

function getFilesFromFolder(folderPath: string) {
	return new Promise<string[]>((resolve, reject) => {
		fs.readdir(folderPath, async (err: any, files: string[]) => {
			if (err) reject(err)
			resolve(files)
		});
	})
}