import { Router } from "express";
import { login ,Comprobar} from "../controllers/autorizacion";
import { verifyToken } from "./verifyToken";

const router=Router()

router.post('/login',login)
router.get('/comprobar',verifyToken,Comprobar)
export default router;