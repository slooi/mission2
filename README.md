# Context

(this is coursework)
Create a website which allows users to upload images of cars to find similar car using Microsoft Azure's Vision Api. This project uses the Image Tagging service they provide. Here are some resources which I found most helpful for this project:

- https://portal.vision.cognitive.azure.com/demo/generic-image-tagging
- https://centraluseuap.dev.cognitive.microsoft.com/docs/services/unified-vision-apis-public-preview-2023-02-01-preview/operations/61d65934cd35050c20f73ab6
- https://centraluseuap.dev.cognitive.microsoft.com/docs/services/unified-vision-apis-public-preview-2023-02-01-preview/operations/61d65934cd35050c20f73ab6/console

# Setup

1) Create a `.env` file. Containing:

```
AZURE_KEY=<YOUR_KEY>
SERVER_IP=<YOUR_IP>
```

2) Create a public folder with pre-labeled images in the `/src/client/public/imgs` folder. Images must be named after the tags you are searching for and must not contain spaces or captial letters. Eg: You might have an image of an SUV, thus you would name like one of the following: `suv.webp`, `suv0.webp`, `suv-pink.webp`, `suv-pink-citycar.webp`

3) Create a public folder for user uploads in `/src/client/public/userUploads` to store user uploads such that they can be queried by Azure's vision service

4) Install dependencies by running `npm i`

5) To run the application run `npm run dev-server`

Note: You will have to open your ports to allow azure to GET images located in the `/src/client/public/userUploads` folder at your server's ip `SERVER_IP`
