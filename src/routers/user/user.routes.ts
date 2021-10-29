import BaseRoutes from "../base.routes";
import userController from "../../controller/user.controller";

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', userController.getAll);
    this.router.get('/:id', userController.getById);
    this.router.post('/', userController.create);
    this.router.put('/:id', userController.update);
    this.router.delete('/:id', userController.delete);
  }
}

export default new UserRoutes().router;