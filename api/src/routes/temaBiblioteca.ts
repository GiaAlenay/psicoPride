import { Router } from "express";
import { findOrcreateBibliotecaTemas } from "../controllers/temaBiblioteca";

const router=Router()

router.get('/',findOrcreateBibliotecaTemas)

export default router;