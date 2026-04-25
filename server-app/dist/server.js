"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const express = require("express");
const cors = require("cors");
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const shortUrl_1 = __importDefault(require("./routes/shortUrl"));
(0, dbConfig_1.default)();
const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use("/api/", shortUrl_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
