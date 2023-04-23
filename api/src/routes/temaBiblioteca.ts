import { Router } from "express";
import { findOrcreateBibliotecaTemas ,findTemaBiblioteca} from "../controllers/temaBiblioteca";

const router=Router()

router.get('/',findOrcreateBibliotecaTemas)
router.get('/:id',findTemaBiblioteca)

export default router;