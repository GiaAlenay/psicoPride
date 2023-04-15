import { Router } from "express";
import { findOrCreateTemasChat ,getRespuesta} from "../controllers/temaChat";

const router=Router()

router.get('/',findOrCreateTemasChat)
router.get('/respuesta/:id',getRespuesta)

export default router;