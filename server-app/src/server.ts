import dotenv = require('dotenv');
import path = require('path');

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

import express = require('express');
import cors = require('cors');

import connectDb from './config/dbConfig';

import shortUrl from './routes/shortUrl';

import { urlModel } from './model/shortUrl';

connectDb();

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

/* API Routes */
app.use("/api", shortUrl);

/* Redirect Route */
app.get("/:shortUrl", async (req, res) => {
  try {

    const shortUrl = req.params.shortUrl;

    const url = await urlModel.findOne({
      shortUrl: shortUrl,
    });

    if (!url) {
      return res.status(404).send("Short URL not found");
    }

   
    url.clicks++;

    await url.save();

    
    res.redirect(url.fullUrl);

  } catch (error) {

    console.log(error);

    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});