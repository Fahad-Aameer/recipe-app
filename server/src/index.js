import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js"

const app = express();
const port = 3001;

app.use(express.json()); //Used to send data to front-end in json format
app.use(cors());

app.use("/auth", userRouter);

//Use environment variable to store the passwords and important things
mongoose.connect("mongodb+srv://fahadaameer:Zaahil33@recipes.o2o7sal.mongodb.net/recipes?retryWrites=true&w=majority")

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
