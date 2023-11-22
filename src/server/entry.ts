import { express_app } from "./server";

const PORT = 8000

express_app.listen(PORT,()=>console.log("Listening on port "+PORT))