import "dotenv/config"

const getTagsFromImageUrl = async ()=>{
	const endpoint = 'https://instancenametesting.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=tags&language=en&gender-neutral-caption=False'; // Replace with your actual endpoint

	const imageUrl = 'https://images-ext-2.discordapp.net/external/B7IMUnRH_Ov0yswFCdnOBqYw6TDrYtU_tMlFosEdV_M/https/pbs.twimg.com/media/F_aOvDDaIAAsXuA.jpg?width=593&height=639';

	console.log("FETCHING")
	return fetch(endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Ocp-Apim-Subscription-Key': process.env.AZURE_KEY,
	},
		body: JSON.stringify({ url: imageUrl }),
	})
	.then(response => {
		console.log("THEN1	")
		return response.json()
	})
	.then(data => {
		const tags = data
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