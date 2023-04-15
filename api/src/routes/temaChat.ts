import { Router } from "express";
import {getRespuesta} from "../controllers/temaChat";

const router=Router()

router.get('/respuesta/:id',getRespuesta)

export default router;