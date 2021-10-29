import { Request, Response } from 'express';

import IController from '../interface/controller.interface';

let data: any[] = [
  { id: 1, name: 'Adi' },
  { id: 2, name: 'Budi' },
  { id: 3, name: 'Cidi' },
  { id: 4, name: 'Didi' }
]

class UserController implements IController {

  getAll(req: Request, res: Response): Response {
    console.log('Ini adalah user controller');
    return res.send(data);
  }

  getById(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find(item => item.id == id)
    return res.send(person);
  }

  create(req: Request, res: Response): Response {
    const { id, name } = req.body;

    data.push({ id, name });
    return res.send('Data created successfully');
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find(item => item.id == id);
    person.name = name;
    return res.send('Data successfully updated');
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.findIndex(item => item.id != id);
    return res.send(person);
  }

}

export default new UserController;