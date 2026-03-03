import express from "express"

const app = express()

app.get("/api/notes", (req, res) => {
res.status(200).send("you got 5 notes")
})

/* CREATE ITEM */

app.post("/api/notes", (req, res) => {
res.status(201).send("you got 5 notes")
})

/* UPDATE ITEM */

app.put("/api/notes/:id", (req, res) => {
res.status(200).send("Note created successfully!")
})

/* DELETE ITEM */

app.put("/api/notes/:id", (req, res) => {
res.status(200).send("Note deleted successfully!")
})


app.listen(3000, () => {
  console.log("Server started on PORT: 5001");
})