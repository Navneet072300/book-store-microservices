import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello Albums");
});

export default router;
