import express from "express"
import { router_apiMaster } from "./api/router_apiMaster"

const PORT = 8000

const app = express()


// const fetchData = ()=>{
// 	const endpoint = 'https://instancenametesting.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=tags&language=en&gender-neutral-caption=False'; // Replace with your actual endpoint

// 	const imageUrl = 'https://media.discordapp.net/attachments/1176361570209636363/1176381542663196732/Fa5nZF9aIAUloQT.jpg?ex=656ea9af&is=655c34af&hm=8da3d6a14a5cdb30e6c1af57dc66ac611b38b8821fa43cc659b84c146d9b4462&=&width=469&height=640';

// 	fetch(endpoint, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Ocp-Apim-Subscription-Key': "5d6871eea16b4b93bf98c95695c90ea1",
// 	},
// 	body: JSON.stringify({ url: imageUrl }),
// 	})
// 	.then(response => response.json())
// 	.then(data => console.log(data.tagsResult.values))
// 	.catch(error => console.error('Error:', error));
// }



// Middleware


// Routes
// app.get("/",(req,res)=>{
// 	res.send("lol")
// })


// Midleware Routes
app.use(router_apiMaster)

app.listen(PORT,()=>console.log("Listening on port "+PORT))


export {app}