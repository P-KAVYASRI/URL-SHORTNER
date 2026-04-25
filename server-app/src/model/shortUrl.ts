import mongoose from "mongoose";
import {nanoid} from "nanoid";

const shortUrlSchema = new mongoose.Schema({
    fullUrl:
    {
        type: String,
        required: true  
    },
    shortUrl:{
        type: String,
        required: true,
        default: () => nanoid().substring(0,10),
    },
    clicks:{
        type: Number,
        required: true,
        default: 0, 
    }
},
{
    timestamps: true // Automatically adds createdAt and updatedAt fields data in an order
}
);

export const urlModel = mongoose.model("ShortUrl",shortUrlSchema);
