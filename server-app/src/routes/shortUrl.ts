import express from "express";
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../controllers/shortUrl";

 const router= express.Router();

 router.post("/shortUrl",createUrl);
 router.post("/shortUrl",getAllUrl);
 router.post("/shortUrl",getUrl);
 router.post("/shortUrl",deleteUrl);

 export default router;

 