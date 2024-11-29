import { RegisterAPI } from "../Controllers/Controllers.js";
import { Router } from "express";

const router = Router();
router.post("/Register", RegisterAPI);

export default router;
