import express from "express";
import "express-async-errors";
import { json } from "body-parser";

import { errorHandler, NotFoundError } from "@redbaron_utk/common/build";
import cookieSession from "cookie-session";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: true,
  })
);

app.get("*", async () => {
  throw new NotFoundError("Not Found");
});

app.use(errorHandler);

export { app };
