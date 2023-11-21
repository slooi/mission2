
const getTagsFromImageUrl = async ()=>{
	const endpoint = 'https://instancenametesting.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=tags&language=en&gender-neutral-caption=False'; // Replace with your actual endpoint

	const imageUrl = 'https://hips.hearstapps.com/hmg-prod/images/2023-chevrolet-corvette-z06-002-1635950091.jpg';

	console.log("FETCHING")
	return fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Ocp-Apim-Subscription-Key': "5d6871eea16b4b93bf98c95695c90ea1",
	},
		body: JSON.stringify({ url: imageUrl }),
	})
	.then(response => {
		console.log("THEN1	")
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