import express from "express";
import BlogModel from "../models/blog";

type ReqType = express.Request;
type ResType = express.Response;
type NextType = express.NextFunction;

class BlogController {
  async getBlogPage(req: ReqType, res: ResType) {
    try {
      const blogs = await BlogModel.find();
      res.render("pages/blog", { blogs });
    } catch (error) {
      console.log(
        "🚀 ~ file: blog.controller.ts ~ line 14 ~ BlogController ~ error",
        error
      );
    }
  }
}
export default new BlogController();
