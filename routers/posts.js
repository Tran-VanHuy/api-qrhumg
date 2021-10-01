import express from "express"
import { createPost, deleteData, getPosts, putData, updatePost } from "../controllers/posts.js";


 const router = express.Router();

router.get('/', getPosts)

router.post('/', createPost)

router.post('/update', updatePost);

router.delete('/delete/:id', deleteData)

router.put('/put/:id', putData)



export default router;