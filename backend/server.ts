import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import bodyParser, { BodyParser } from "body-parser";
import mongoose from "mongoose";
import { generatePrivateKey } from "viem/accounts"
import qs from "qs";
import axios from 'axios';
const app = express()
const port = 5173

const {
    DB_CONNECTION_STRING,
    VIPPS_CLIENT_ID,
    VIPPS_CLIENT_SECRET,
    VIPPS_REDIRECT_URI,
    VIPPS_AUTH_URL,
    VIPPS_TOKEN_URL,
    VIPPS_USERINFO_URL,
} = process.env

mongoose.connect(DB_CONNECTION_STRING!)
const db = mongoose.connection

db.on("error", (error) => {
    console.error(error)
})

db.once("open", () => console.log("Server connected to DB"))



app.use(bodyParser.json())


app.get("/auth/vipps", async (req: Request, res: Response) => {
    //Should be randomly generated for secret stuffs
    const nonce = "123hemmelig"
    const state = "321hemmelig"

    //What data we want to fetch. Only phone to test
    const scope = "phoneNumber nin"

    const authParams = qs.stringify({
        client_id: VIPPS_CLIENT_ID,
        redirect_uri: VIPPS_REDIRECT_URI,
        response_type: 'code',
        scope,
        state,
        nonce
    })

    const authURL = `${VIPPS_AUTH_URL}?${authParams}`;
    console.log("Redirecting to VIPPS")
    res.redirect(authURL)
})





app.get("/", async (req: Request, res: Response) => {
    const { code, state, error } = req.query;

    if (error) {
        res.send(`Vipps returned an error: ${error}`);
    }

    if (!code) {
        res.send('No code returned from Vipps');
    }

    const data = qs.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: VIPPS_REDIRECT_URI,
    });

    const tokenResponse = await axios.post(
        VIPPS_TOKEN_URL as string,
        data,
        {
            auth: {
                username: VIPPS_CLIENT_ID as string,
                password: VIPPS_CLIENT_SECRET as string,
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
    );

    const { access_token, id_token, refresh_token, token_type } = tokenResponse.data;
    console.log('Token response:', tokenResponse.data);

    const userInfoResponse = await axios.get(VIPPS_USERINFO_URL as string, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });

    const userInfo = userInfoResponse.data;
    console.log('User info:', userInfo);


    res.redirect("http://localhost:3000/")
    /*
        res.json({
        message: 'Login successful!',
        access_token,
        id_token,
        refresh_token,
        userInfo,
    });
    */
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