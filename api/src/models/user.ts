import { Sequelize, Model, DataTypes, Optional } from 'sequelize';
interface UserAttributes {
    id: number;
    name: string;
  }
  
  // Define la interfaz para las entradas opcionales de la tabla de usuarios
  interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
  
  // Define el modelo de la tabla de usuarios
  class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  
    public static associate(models: any) {
      User.hasMany(models.Identity);
    }
  }

  export default User;