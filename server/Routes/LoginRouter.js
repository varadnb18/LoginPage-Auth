import { LoginAPI } from "../Controllers/Controllers.js";
import { Router } from "express";

const router = Router();
router.post("/Login", LoginAPI);

export default router;
