import { Model, INTEGER, STRING } from 'sequelize';
import db from '.'

import Author from './Author';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId:number;
}

Book.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING,
    allowNull:true,
  },
  authorId: {
    type: INTEGER,
    allowNull:true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    field: 'author_id',
    references: {
      model: 'authors',
      key: 'id'
    },
  },
  genreId: {
    type: INTEGER,
    allowNull: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    field: 'genre_id',
    references: {
      model: 'genres',
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'books',
  timestamps: false,
});

Book.belongsTo(Author);

Author.hasMany(Book);

export default Book;