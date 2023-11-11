import express from 'express';

import * as addCanCon from '../controllers/addCandidate.controller';

const router = express.Router();

router.post('/', addCanCon.addCandidate);

export default router;
