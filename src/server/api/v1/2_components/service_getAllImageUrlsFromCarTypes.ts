import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const rootPathFromDirname = path.join(__dirname, "..", "..", "..", "..")
const publicPathFromRoot = path.join("client", "public")

export const service_getAllImageUrlsFromCarTypes = async (carTypes: string[]) => {
	/* 
		INPUT(array<string>): ["hatchback", "suv"]
		OUTPUT(array<string>): [
			"/public/imgs/suv0.webp",
			"/public/imgs/suv1.webp"
		]
		Note, carModel might not exist
	*/

	// Get files from folder
	const directoryPath = path.join(rootPathFromDirname, publicPathFromRoot, "imgs");
	const files = await getFilesFromFolder(directoryPath)
	console.log("files")
	console.log("files")
	console.log(files)
	
	// Filter to only include wanted car types
	let filteredFiles = getFilesContainCarTypes(files,carTypes)

	// Attach public path so client can access
	const filesWithPublicPath = filteredFiles.map(filteredFile=>"/public/imgs/"+filteredFile)
	console.log(filesWithPublicPath)
	return filesWithPublicPath
}


/* ############ HELPER FUNCTIONS ############ */
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