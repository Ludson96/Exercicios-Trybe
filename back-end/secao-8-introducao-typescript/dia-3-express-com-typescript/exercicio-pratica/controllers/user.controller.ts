import { Request, Response } from 'express';
import { UserService } from "../services/index";
import statusCodes from '../statusCodes';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    try {
      const users = await this.userService.getAll();
      res.status(statusCodes.OK).json(users);
    } catch (e) {
      const result = (e as Error).message;
      res.status(statusCodes.INTERNAL_ERROR) .json({
        message: 'Não foi possivel trazer todos os usuários',
        error: result,
      })
    }
  };

  public getById = async (req: Request, res:Response) => {
    try {
      const  id  = Number(req.params.id);
      const user = await this.userService.getById(id);
      res.status(statusCodes.OK).json(user);
    } catch(e) {
      const result = (e as Error).message;
      res.status(statusCodes.INTERNAL_ERROR).json({
        message: 'Não foi possivel localizar usuário pelo id',
        error: result,
      })
    }
  }

  public createUser = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      const newUser = await this.userService.createUser(user);
      res.status(statusCodes.CREATED).json(newUser);
    } catch (e) {
      const result = (e as Error).message;
      res.status(statusCodes.INTERNAL_ERROR).json({
        message: 'Não foi possivel criar usuário',
        error: result,
      })
    }
  }

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      await this.userService.deleteUser(id);
      res.status(statusCodes.OK).json({ message: 'Usuário deletado '});
    } catch (e) {
      const erro = (e as Error).message;
      res.status(statusCodes.INTERNAL_ERROR).json({
        message: 'Não foi possivel deletar o usuário',
        erro,
      })
    }
  }
}