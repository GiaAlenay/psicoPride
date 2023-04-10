import TemaChat from './temaChat';
import GenderIdentity from './genderIdentity';
import {Model,DataTypes} from 'sequelize'
import sequelize from '../database';


class TemaChatGenero extends Model {
    public TemaChatId!: number;
    public GeneroId!: number;  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly chat?: TemaChat;
    public readonly gender?: GenderIdentity;  
  }
  
  TemaChatGenero.init(
    {
      TemaChatId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
          model: TemaChat,
          key: 'id',
        },
      },
      GeneroId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
          model: GenderIdentity,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'chat_genero',
      timestamps: false
    }
  );

TemaChat.belongsToMany(GenderIdentity, { through: TemaChatGenero, foreignKey:'TemaChatId' });
GenderIdentity.belongsToMany(TemaChat, { through: TemaChatGenero, foreignKey:'GeneroId' });


export default TemaChatGenero;