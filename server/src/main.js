import express from "express"
import fs from "fs"

const app = express()

app.use(express.json())

app.post('/arquivo', (req, res) => {
    fs.writeFileSync("teste.txt", req.body)
    res.send("hello world")
})

app.listen(3000)