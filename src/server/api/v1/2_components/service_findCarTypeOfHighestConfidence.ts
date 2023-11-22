// WHEN FILTERING REMOVE SPACES

import { AzureTagArray } from "./model_azureTagArray"

// INPUTS:
// OUTPUTS:

const carTypes=[
	"suv",
	"supercar",
	"sportscar",
	"hatchback",
	"supermini",
	"familycar",
	"compactmpv"
]

export const service_findCarTypeOfHighestConfidence = (tagArray:AzureTagArray)=>{
	// 1) Filter array of tags so we only have relevent car tag types
	// 1.1) remove white space
	console.log("BEFORE")
	console.log(tagArray)
	let filteredTagArray:AzureTagArray = tagArray.map(item=>{
		// Create new item
		const newItem = {...item}

		// Remove whitespace
		newItem.name = newItem.name.replace(/\s/,"")
		return newItem
	})

	console.log("AFTER1")
	console.log(filteredTagArray)

	filteredTagArray = filteredTagArray.filter(item=>carTypes.indexOf(item.name)>=0)



	console.log("AFTER2")
	console.log(filteredTagArray)

	
	return filteredTagArray

}
