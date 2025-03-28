import express from "express";
import "express-async-errors";
import GlobalError from "./middlewares/GlobalError";
import { routes } from "./routes";

export class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.app.use(express.json());
    this.app.use("/", routes);
    this.app.use(GlobalError.handleError);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next): void => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS,PUT,PATCH");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      if (_req.method === "OPTIONS") {
        res.status(200).end();
        return;
      }
      next();
    };
    this.app.use(accessControl);
  }

  public start(port: number | string): void {
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  }
}
