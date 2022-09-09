import express from "express";
import Blog from "../models/blog";
import BlogController from "../controller/blog.controller";
const router = express.Router();

router.post("/", BlogController.createBlog);

export default router;
