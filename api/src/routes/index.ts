import { Router } from 'express';
import users from "./users.routes";
import sexo from "./sexo.routes"
import gender from "./gender.routes"
import orientation from "./orientations"
import chatTemas from "./temaChat"

const router = Router();
router.use("/usuarios", users)
router.use("/sexos",sexo)
router.use("/generos",gender)
router.use("/orientaciones",orientation)
router.use("/temachat",chatTemas)

export default router;