import express from "express"

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("you got 20 notes")
})

router.post("/", (req, res) => {
  res.status(201).send("you got 20 notes")
})

router.put("/:id", (req, res) => {
  res.status(200).send("you got 20 notes")
})

router.delete("/:id", (req, res) => {
  res.status(200).send("you got 20 notes")
})



export default router