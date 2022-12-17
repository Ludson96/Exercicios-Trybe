import connection from "../models/connection";
import { UserModel } from "../models/index";
import { IUser } from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.model.getById(id);
    return user;
  }

  public async createUser(user: IUser): Promise<IUser> {
    const newUser = await this.model.createUser(user);
    return newUser;
  }

  public async deleteUser(id: number): Promise<void> {
    await this.model.deleteUser(id);
  }
}