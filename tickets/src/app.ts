import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@tickets-mohab/common";
import cookieSession from "cookie-session";
import { createTicketRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);

app.use(createTicketRouter);

app.all("*", async (req, res, next) => {
  next(new NotFoundError());
});
app.use(errorHandler);

export { app };
