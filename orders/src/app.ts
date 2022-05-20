import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@redbaron_utk/common/build";
import cookieSession from "cookie-session";

import { createTicketRouter } from "./routes/new";
import { indexTicketRouter } from "./routes/index";
import { showTicketRouter } from "./routes/show";
import { updateTicketRouter } from "./routes/update";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.use(currentUser);
app.use(createTicketRouter);
app.use(indexTicketRouter);
app.use(showTicketRouter);
app.use(updateTicketRouter);

app.get("*", async () => {
  throw new NotFoundError("Not Found");
});

app.use(errorHandler);

export { app };
