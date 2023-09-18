import express, { Request, Response } from 'express';
import ApiController from '../controllers/api';

const router = express.Router();

router.get('/api', async (_req: Request, res: Response) => {
  const apiController = new ApiController();
  const response = await apiController.getMessage();

  return res.send(response);
});

export default router;
