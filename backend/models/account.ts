import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    clientID : {
        type: Number,
        required: true
    },
    privateKey : {
        type: String,
        required: true
    }
})

const Account = mongoose.model("Accounts", accountSchema, "accounts")
export default Account;
