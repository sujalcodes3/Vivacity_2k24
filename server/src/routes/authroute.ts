import express from 'express';

import * as auth from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', auth.signUp);
router.post('/login', auth.Login);

export default router;
