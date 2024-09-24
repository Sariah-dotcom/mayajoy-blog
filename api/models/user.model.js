import { timeStamp } from "console";
import mongoose, { mongo } from "mongoose";

const userSchema = new mongo.userSchema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,
    }
}, {timeStamps: true});

const User = mongoose.model('User', userSchema);

export default User;