import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const result = await this.connection.execute('SELECT * FROM Users');
    const [rows] = result;
    return rows as IUser[];
  }

  public async getById(id: number): Promise<IUser> {
    const [rows] = await this.connection
      .execute('SELECT * FROM Users WHERE id = ?', [id]);
      const [user] = rows as IUser[];
    return user as IUser;
  }
}