import express from "express";

class Main {
  getHomePage(req: express.Request, res: express.Response) {
    res.render("/page/home");
  }
}
export default new Main();
