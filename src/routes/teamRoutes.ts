import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ teams: [] });
});

export default router;
