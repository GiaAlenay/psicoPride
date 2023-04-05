import { Router } from "express";
import { findOrCreatGender } from "../controllers/gender";

const router=Router()

router.get('/',findOrCreatGender)

export default router;