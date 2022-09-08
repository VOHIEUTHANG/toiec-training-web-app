import express from "express";
import Blog from "../models/blog";
import BlogController from "../controller/blog.controller";
const router = express.Router();

router.get("/", BlogController.getBlogPage);
router.get("/add", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  });

  blog
    .save()
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => console.log(err));
});
router.get("/single", (req, res) => {
  Blog.findById("6319bba0e4d37777c953fb0f")
    .then((result) => {
      res.json({ data: result });
    })
    .catch((err) => console.log(err));
});

export default router;
