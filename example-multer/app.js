const express = require("express")
const cors = require("cors")
const multer = require("multer")
const path = require("path")
const fs = require("fs/promises")
const {nanoid} = require("nanoid")

const app = express() // створили веб-сервер

app.use(cors()) // проганяємо веб-вервер серез міддлвари
app.use(express.json()) // проганяємо веб-вервер серез міддлвари
app.use(express.static("public")) // дозволяє Express віддавати статичні файли із папки Public

const books = []

const dirTemp = path.join(__dirname, "temp")

const multerConfig = multer.diskStorage({
    destination: dirTemp,
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: multerConfig,
})

app.get("/api/books", (req, res) => {
    res.json(books)
})

const dirBooks = path.join(__dirname, "public", "books")
app.post("/api/books", upload.single("cover"), async (req, res) => {
    console.log("req.body: ", req.body)
    console.log("req.file: ", req.file)

    const { path: uploadTemp, originalname } = req.file
    const uploadResult = path.join(dirBooks, originalname)

    // await fs.rename("./temp/cover.jpg", "./public/books/cover.jpg")
    await fs.rename(uploadTemp, uploadResult)

    const coverPath = path.join("books", originalname)
    const newBook = {
        id: nanoid(),
        ...req.body,
        coverPath
    }
    books.push(newBook)

    res.status(201).json(newBook) // відправляємо відповідь на Фронтенд
})

app.listen(3000) // запустили сервер