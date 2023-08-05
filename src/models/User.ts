import { model, Schema } from "mongoose";
import { userType } from "../types/user.type";

const userSchema: Schema = new Schema({
    first_name: {
        type: String,
        default: null
    },
    last_name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    token: {
        type: String
    },
});

// Create the User model using the schema
const user = model<userType>("User", userSchema);

export default user;
