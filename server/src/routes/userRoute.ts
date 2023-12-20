import express from "express"
import { RouteProtector } from "../middlewares/auth.middleware";
import * as user from "../controllers/user.controller"

const router = express.Router();

router.get("/getuser",RouteProtector,user.GetUser)

export default router;