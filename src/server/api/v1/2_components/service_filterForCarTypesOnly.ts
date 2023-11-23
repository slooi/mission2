import { AzureTagArray } from "./model_azureTagArray"
import { carTypes } from "./utils_carTypes"

// INPUTS:
// OUTPUTS:

export const service_filterForCarTypesOnly = (tagArray:AzureTagArray)=>{
	// 1) Filter array of tags so we only have relevent car tag types
	// 1.1) remove white space
	let filteredTagArray:AzureTagArray = tagArray.map(item=>{
		// Create new item
		const newItem = {...item}

		// Remove whitespace
		newItem.name = newItem.name.replace(/\s/,"")
		return newItem
	})

	// If tag exists in our carTypes config var, save it!
	filteredTagArray = filteredTagArray.filter(item=>carTypes.indexOf(item.name)>=0)
	
	return filteredTagArray

}
