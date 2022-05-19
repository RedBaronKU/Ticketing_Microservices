import express, { Request, Response } from "express";
import { NotFoundError } from "@redbaron_utk/common/build";
import { Ticket } from "../models/ticket";

const router = express.Router();

router.get("/api/tickets/:id", async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    throw new NotFoundError("Ticket not found");
  }
  res.send(ticket);
});

export { router as showTicketRouter };