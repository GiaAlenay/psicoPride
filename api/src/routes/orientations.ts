import { Router } from "express";
import { findOrCreateOrientations } from "../controllers/orientation";

const router=Router()

router.get('/',findOrCreateOrientations)

export default router;