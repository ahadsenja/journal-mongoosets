import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import userRoutes from './routers/user/user.routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(cors())
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send('Hi from typescript mongoose')
    });

    this.app.use('/api/v1/users', userRoutes);
  }
}

const port: number = 8080;
const app = new App().app;

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
})