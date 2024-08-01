import express, { Request, Response } from "express";
import { requireAuth } from "@tickets-mohab/common";

const router = express.Router();

router.post("/api/tickets", requireAuth, (req: Request, res: Response) => {
  res.sendStatus(201);
});

export { router as createTicketRouter };
