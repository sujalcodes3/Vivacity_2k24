import express from 'express';

import * as event from '../controllers/event.controller';

const router = express.Router();

router.post("/registerUser",event.RegisterUser)

export default router;