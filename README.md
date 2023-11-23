# Context

(this is coursework)
Create a website which allows users to upload images of cars to find similar car.

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

Note: You will have to open your ports to allow azure 