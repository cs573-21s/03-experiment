import { Router } from 'express';

import { generateExperiment, getAllExperiments, completeExperiment, getCompleteExperiments, getExperimentStats } from './server';

const router = Router();

router.get('/', getAllExperiments);
router.get('/complete', getCompleteExperiments);
router.post('/', generateExperiment);
router.put('/', completeExperiment);
router.get('/stats', getExperimentStats);

export default router;
