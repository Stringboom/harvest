import { Router } from "express";
import { getPosts, getPost } from "../controllers/postsController";

const router = Router();

router.post("/posts", getPosts);
router.post("/post/:id", getPost);

export default router;
