import mongoose from 'mongoose';
import { getTimestamp } from 'swr/_internal';

const { Schema } = mongoose

const userSchema = new Schema (
    {
        name :{
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type : String,
            unique: true,
            required: true,
        },
        password:
        {
            type: String,
            required:true,
        },

    },
    { timestamps: true },
)

export default mongoose.model("User", userSchema);