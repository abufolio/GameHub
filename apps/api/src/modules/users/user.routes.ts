import { Router } from "express";
import { getUserByUsername } from "./user.controller.js";

const router = Router();

router.get("/:username", getUserByUsername);

export default router;
