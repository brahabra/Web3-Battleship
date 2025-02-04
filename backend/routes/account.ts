import express, {Request, Response} from "express"
const router = express.Router()
import Account from "../models/account"
import { generatePrivateKey } from "viem/accounts"

// Check if ClientID exists in DB
router.get("/", async (req: Request, res: Response) => {
    try {
        const clientID = req.body["clientID"]
        const account = await Account.findOne({ clientID: clientID})
        console.log(account)
        if (account != null) {
            var privateKey = account.privateKey
            res.status(200).json(privateKey)
        } else {
            var newPrivateKey = generatePrivateKey()
            await Account.create({
                clientID: clientID,
                privateKey : newPrivateKey
            })
            res.json(newPrivateKey)
        }
        
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
})

const AccountRouter = router
export default AccountRouter