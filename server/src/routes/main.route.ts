import express from "express";
import BlogController from "../controller/blog.controller";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home");
});
router.get("/blogs", BlogController.getBlogPage);
router.get("/blogs/create", BlogController.getCreateBlogPage);
router.get("/blogs/:id", BlogController.getBlogById);

export default router;
