
const getTagsFromImageUrl = ()=>{
	const endpoint = 'https://instancenametesting.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=tags&language=en&gender-neutral-caption=False'; // Replace with your actual endpoint

	const imageUrl = 'https://cdn5.vectorstock.com/i/1000x1000/65/54/cute-anime-girl-in-black-hoodie-and-green-eyes-vector-39706554.jpg';

	fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Ocp-Apim-Subscription-Key': "5d6871eea16b4b93bf98c95695c90ea1",
	},
	body: JSON.stringify({ url: imageUrl }),
	})
	.then(response => response.json())
	.then(data => console.log(data.tagsResult.values))
	.catch(error => console.error('Error:', error));
}
