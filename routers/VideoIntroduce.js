import express from "express"
import { getVideoIntroduce } from "../controllers/VideoIntroduce.js";

const router = express.Router();

router.get("/videointroduce", getVideoIntroduce)

export default router;