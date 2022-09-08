import express from "express";
import configs from "./configs";
import initRoutes from "./routes";
import connectMongoDB from "./database/connectDB";
import dotenv from "dotenv";
dotenv.config();

const app = express();
configs(app);
initRoutes(app);

const PORT = process.env.PORT ?? 3000;
(async () => {
  await connectMongoDB();
  app.listen(PORT, () => {
    console.log(`Server is listening on URL: http://localhost:${PORT}`);
  });
})();
