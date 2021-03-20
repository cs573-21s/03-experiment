import { Router, static as expressStatic } from 'express';
import { resolve } from 'path';
const path = require('path');


import experimentRouter from './experiment/router';

const router = Router();

router.use('/api/v1/experiment', experimentRouter);

router.use(expressStatic(resolve('public')));
export default router;
