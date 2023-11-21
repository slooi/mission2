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
		return response.json()
	})
	.then(data => {
		const tags = data.tagsResult.values
		console.log("tags0")
		console.log(tags)

		return tags
	})
	.catch(error => {
		console.log("THERE WAS A FUCKING ERROR")
		console.error('Error:', error)
	});
}

export {getTagsFromImageUrl}