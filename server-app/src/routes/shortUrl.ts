import express from "express";
import { createUrl, getAllUrl, getUrl, deleteUrl } from "../controllers/shortUrl";

const router = express.Router();

router.post("/shortUrl", createUrl);        // POST - create
router.get("/shortUrl", getAllUrl);         // GET - get all
router.get("/shortUrl/:id", getUrl);       // GET - get one by id
router.delete("/shortUrl/:id", deleteUrl); // DELETE - delete by id

export default router;