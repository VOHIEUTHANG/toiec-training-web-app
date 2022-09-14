import express from "express";
import configs from "./configs";
import initRoutes from "./routes";
import connectMongoDB from "./database/connectDB";
require("./models/Question");
require("./models/Package");
require("./models/Part");
import dotenv from "dotenv";
dotenv.config();

const app = express();
configs(app);

initRoutes(app);

const PORT = process.env.PORT ?? 3000;

connectMongoDB((error) => {
  if (!error) {
    app.listen(PORT, () => {
      console.log(`Server is listening on URL: http://localhost:${PORT}`);
    });
  } else {
    console.log(error?.message);
  }
});
