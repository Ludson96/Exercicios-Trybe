import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const [rows] = await this.connection.execute('SELECT * FROM Users');
    return rows as IUser[];
  }

  public async getById(id: number): Promise<IUser> {
    const [rows] = await this.connection
      .execute('SELECT * FROM Users WHERE id = ?', [id]);
      const [user] = rows as IUser[];
    return user as IUser;
  }

  public async createUser(user: IUser): Promise<IUser> {
    const { name, email, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
        'INSERT INTO Users(name, email, password) VALUES(?, ?, ?)',
        [name, email, password]
      );
    return { id: insertId, ...user }
  }

  public async deleteUser(id: number): Promise<void> {
    await this.connection.execute(
      'DELETE FROM Users WHERE id = ?', [id]
    );

  }
}