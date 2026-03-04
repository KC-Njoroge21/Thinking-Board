import express from "express"
import notesRoutes from "./src/routes/notesRoutes.js"
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv"

dotenv.config()


const app = express()

const PORT = process.env.PORT || 3000

//middleware
app.use(express.json())  // this middleware will parse JSON bodies

app.use((req, res, next) => {
  console.log("We just got a new Request");
  next();
})

app.use("/api/notes", notesRoutes)

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
}) 
})




