import { Router } from "express";
import { findOrCreateSexs } from "../controllers/sexo";

const router=Router()

router.get('/',findOrCreateSexs)

export default router;