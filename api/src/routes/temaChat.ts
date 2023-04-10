import { Router } from "express";
import { findOrCreateTemasChat } from "../controllers/temaChat";

const router=Router()

router.get('/',findOrCreateTemasChat)

export default router;