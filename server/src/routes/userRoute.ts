import express from "express"

import * as user from "../controllers/user.controller"

const router = express.Router();

router.get("/getuser",user.GetUser)

export default router;