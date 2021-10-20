import { Request, Response } from 'express';

interface IController {
  getAll(req: Request, res: Response): Response | Promise<Response>;
  getById(req: Request, res: Response): Response | Promise<Response>;
  create(req: Request, res: Response): Response | Promise<Response>;
  update(req: Request, res: Response): Response | Promise<Response>;
  delete(req: Request, res: Response): Response | Promise<Response>;
}

export default IController;