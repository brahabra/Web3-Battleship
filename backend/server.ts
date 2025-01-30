import dotenv from "dotenv";
dotenv.config();
import express, {Request, Response} from "express";
import bodyParser, { BodyParser } from "body-parser";
import mongoose from "mongoose";
import {generatePrivateKey} from "viem/accounts"
import AccountRouter from "./routes/account";
const app = express()
const port = 3000

mongoose.connect(process.env.DB_CONNECTION_STRING!)
const db = mongoose.connection

db.on("error", (error) => {
    console.error(error)
})

db.once("open", () => console.log("Server connected to DB"))



app.use(bodyParser.json())

app.use("/account", AccountRouter)


app.get("/", async (req: Request,res: Response) => {
    var items =  await db.collection("accounts").count()
    console.log(items)
    var key = generatePrivateKey()
    console.log(key)
    res.send("Hello world!")
})

/*
app.get("/get/account", async (req: Request, res: Response) => {
    console.log(req.body["key"])
    // Check DB if key exist
    //   -> Return privateKey
    // Else
    //   -> Generate key and add to DB. Return Key
    res.send("Skibidi")
})
*/
app.listen(port, () => console.log("Server Started"))