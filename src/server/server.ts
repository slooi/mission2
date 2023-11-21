import express from "express"

const PORT = 8000

const app = express()

app.get("/",(req,res)=>{
	res.send("lol")
})

app.listen(PORT,()=>console.log("Listening on port "+PORT))