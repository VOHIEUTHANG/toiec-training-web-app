import mainRoute from "./main.route";
import blogRoute from "./blog.route";
export default function initRoutes(app: any) {
  app.use("/", mainRoute);
  app.use("/blog", blogRoute);
}
