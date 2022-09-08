import express from "express";
const router = express.Router();
import Blog from "../models/blog";

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

router.get("/get-all", (req, res) => {
  Blog.find()
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
});

export default router;
