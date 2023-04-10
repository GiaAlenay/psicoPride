import TemaChat from './temaChat';
import Sexo from './sexo';
import {Model,DataTypes} from 'sequelize'
import sequelize from '../database';


class TemaChatSexo extends Model {
    public TemaChatId!: number;
    public SexoId!: number;  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly chat?: TemaChat;
    public readonly sexo?: Sexo;  
  }
  
  TemaChatSexo.init(
    {
      TemaChatId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
          model: TemaChat,
          key: 'id',
        },
      },
      SexoId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
          model: Sexo,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'chat_sexo',
      timestamps: false
    }
  );

TemaChat.belongsToMany(Sexo, { through: TemaChatSexo, as:'sexos',foreignKey:'TemaChatId' });
Sexo.belongsToMany(TemaChat, { through: TemaChatSexo, as:'temachat',foreignKey:'SexoId' });


export default TemaChatSexo;