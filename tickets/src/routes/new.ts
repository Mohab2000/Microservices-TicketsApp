import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@tickets-mohab/common";

const router = express.Router();

router.post(
  "/api/tickets",
  requireAuth,
  [
    body("title").not().isEmpty().withMessage("Title is Required!"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price must be greater than 0 "),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    res.sendStatus(201);
  }
);

export { router as createTicketRouter };
