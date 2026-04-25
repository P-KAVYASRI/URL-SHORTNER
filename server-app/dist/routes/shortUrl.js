"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shortUrl_1 = require("../controllers/shortUrl");
const router = express_1.default.Router();
router.post("/shortUrl", shortUrl_1.createUrl); // POST - create
router.get("/shortUrl", shortUrl_1.getAllUrl); // GET - get all
router.get("/shortUrl/:id", shortUrl_1.getUrl); // GET - get one by id
router.delete("/shortUrl/:id", shortUrl_1.deleteUrl); // DELETE - delete by id
exports.default = router;
