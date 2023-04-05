// src/models/user.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../database';
interface UserAttributes {
  id?: number;
  age: number;
  
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id?: number;
  public age!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: "users",
  }
);

export default User;