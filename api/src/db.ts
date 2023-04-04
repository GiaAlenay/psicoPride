import express from 'express';
import { Sequelize, Model, DataTypes, Optional } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

// Define las variables de entorno
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

// Crea la conexión a la base de datos
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);

// Define la interfaz para los campos de la tabla de usuarios
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

// Define la interfaz para los campos de la tabla de identidades
interface IdentityAttributes {
  id: number;
  userId: number;
  email: string;
}

// Define la interfaz para las entradas opcionales de la tabla de identidades
interface IdentityCreationAttributes extends Optional<IdentityAttributes, 'id'> {}

// Define el modelo de la tabla de identidades
class Identity extends Model<IdentityAttributes, IdentityCreationAttributes> implements IdentityAttributes {
  public id!: number;
  public userId!: number;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Define la relación entre las tablas de usuarios e identidades
User.hasMany(Identity);
Identity.belongsTo(User);

// Sincroniza la base de datos con los modelos definidos
sequelize.sync({ force: true })
  .then(() => console.log('Base de datos sincronizada'));

// Crea una nueva instancia de usuario con una identidad asociada
app.get('/', async (req, res) => {
  try {
    const user = await User.create(
      {
        name: 'John Doe',
        
      },
      {
        include: [Identity],
      }
    );

    res.json(user);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor`)})