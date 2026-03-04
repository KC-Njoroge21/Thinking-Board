import express from "express"
import notesRoutes from "./src/routes/notesRoutes.js"
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv"

dotenv.config()


const app = express()

const PORT = process.env.PORT || 3000

app.use("/api/notes", notesRoutes)

connectDB();


app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
}) 

