import { Router } from "express";
import { getAllUsersAPI } from "../Controllers/Controllers.js";

const router = Router();
router.get("/users", getAllUsersAPI);

export default router;
