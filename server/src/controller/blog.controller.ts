import express from "express";
import BlogModel from "../models/blog";

type ReqType = express.Request;
type ResType = express.Response;
type NextType = express.NextFunction;

class BlogController {
  async getBlogPage(req: ReqType, res: ResType) {
    try {
      const blogs = await BlogModel.find().sort({ createdAt: -1 });
      res.render("pages/blogs", { blogs });
    } catch (error) {
      console.log(
        "🚀 ~ file: blog.controller.ts ~ line 14 ~ BlogController ~ error",
        error
      );
    }
  }
  async getCreateBlogPage(req: ReqType, res: ResType) {
    res.render("pages/createBlog");
  }
  async getBlogById(req: ReqType, res: ResType) {
    const blogId = req.params?.id;
    console.log(blogId);
    BlogModel.findById(blogId)
      .then((blog) => {
        res.render("pages/blog-detail", { blog });
      })
      .catch(console.log);
  }
  async createBlog(req: ReqType, res: ResType) {
    const blogData = req.body;
    const blog = new BlogModel(blogData);
    try {
      const newBlogData = await blog.save();
      res.json({ blog: newBlogData });
    } catch (error) {
      console.log(
        "🚀 ~ file: blog.controller.ts ~ line 30 ~ BlogController ~ error",
        error
      );
    }
  }
}
export default new BlogController();
