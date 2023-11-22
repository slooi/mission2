import request from "supertest";
import { express_app } from "../../../../server";

describe("POST /api/v1/imageanalysis/tags/dev",()=>{
	it("Responds with json",async ()=>
		request(express_app)
			.get("/api/v1/imageanalysis/tags/dev")
			.set("Accept","application/json")
			.then(res=>{
				console.log(res.body)
				console.log(res.body)
				expect(res.body).toHaveProperty("length")
			})
	)
})