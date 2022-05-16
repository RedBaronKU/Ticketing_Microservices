import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/api/users/currentUser", (req, res) => {
  if (!req.session?.jwt) {
    res.send({ currentUser: null });
    return;
  }
  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!);
    res.send({ currentUser: payload });
    return;
  } catch (e) {
    res.send({ currentUser: null });
    return;
  }
});

export { router as currentUserRouter };
