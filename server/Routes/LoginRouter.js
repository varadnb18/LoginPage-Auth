import { LoginAPI } from "../Controllers/Controllers.js";
import { Router } from "express";

const router = Router();
router.get("/Login", LoginAPI);

export default router;
