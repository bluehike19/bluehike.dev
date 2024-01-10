const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")
const path = require("path")
const multer = require('multer')
const cors = require("cors")

dotenv.config()
app.use(express.json())


//DATABASE

mongoose
   .connect(process.env.MONGO_URI)
   .then(() => console.log("DB Connection Successfull!"))
   .catch((err) => {
    console.log(err)
  })

  //IMAGE UPLOAD

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded")
})

//MIDDLEWARES

app.use("/images", express.static(path.join(__dirname, "/images")))
app.use(cors({origin:"http://localhost:3000", credentials: true}))
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/categories", categoryRoute)

app.listen("5000", () => {
    console.log("Backend is running!")
})
