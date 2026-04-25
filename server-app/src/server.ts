import express = require("express");
import dotenv = require("dotenv");
import cors = require("cors");
import connectDb from "./config/dbConfig";
dotenv.config();
connectDb();
const port= process.env.PORT || 5001;
const app = express();
app.get("/",(req,res)=> {
    res.send("Hello World!");
});
app.listen(port,()=>{  
    console.log(`Server is running on port ${port}`);
})
