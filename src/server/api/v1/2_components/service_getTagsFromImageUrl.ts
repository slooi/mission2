import "dotenv/config"

const getTagsFromImageUrl = async (imageUrl:string)=>{
	const endpoint = 'https://instancenametesting.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=tags&language=en&gender-neutral-caption=False'; // Replace with your actual endpoint

	console.log("FETCHING")
	return fetch(endpoint, {
		method: 'POST',
		// @ts-ignore
		headers: {
			'Content-Type': 'application/json',
			'Ocp-Apim-Subscription-Key': process.env.AZURE_KEY,
	},
		body: JSON.stringify({ url: imageUrl }),
	})
	.then(response => {
		console.log("Resceived response")
		return response.json()
	})
	.then(data => {
		console.log("jsonfied data:")
		console.log(data)
		const tags = data.tagsResult.values
		console.log("tags0")
		console.log(tags)

		return tags
	})
	.catch(error => {
		console.log("error:")
		console.log(error)
		throw new Error("THERE WAS A FUCKING ERROR")
	});
}

export {getTagsFromImageUrl}