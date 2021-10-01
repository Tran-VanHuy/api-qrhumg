import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import posts from "./routers/posts.js";
import  mongoose  from "mongoose";
import postdepratment from "./routers/postsDepartment.js"
import videointroduce from "./routers/VideoIntroduce.js"
import dotenv from "dotenv"

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true, limit : "50mb", parameterLimit:50000 }))
app.use(cors())

app.use("/posts", posts)
app.use("/", postdepratment)
app.use("/", videointroduce)

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
      console.log("Connected to DB");
      app.listen(PORT, () => {

            console.log(`Server is running on port ${PORT}`);
      })
}).catch(err => {

      console.log("err", err);
}) 



