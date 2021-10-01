import express  from "express";
import { deleteDepartment, filterDepartment, getDepartment, postDepartment } from "../controllers/postsDepartment.js";
import { PostListModel } from "../models/PostListModel.js";

const router = express.Router();

router.get("/posts/department&category=&page=1&per_page=5", getDepartment)
router.delete("/posts/department&category=&page=1&per_page=5&:id", deleteDepartment)
router.post("/posts/department&category=&page=1&per_page=5", postDepartment)
router.get("/posts/department&category=:slug&page=1&per_page=5", filterDepartment)

export default router;