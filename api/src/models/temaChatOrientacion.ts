import TemaChat from './temaChat';
import SexualOrientation from './sexualOrientation';
import {Model,DataTypes} from 'sequelize'
import sequelize from '../database';


class TemaChatOrientacion extends Model {
    public TemaChatId!: number;
    public OrientacionId!: number;  
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly chat?: TemaChat;
    public readonly orientacion?: SexualOrientation;  
  }
  
  TemaChatOrientacion.init(
    {
      TemaChatId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
          model: TemaChat,
          key: 'id',
        },
      },
      OrientacionId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: {
          model: SexualOrientation,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'chat_orientacion',
      timestamps: false
    }
  );

TemaChat.belongsToMany(SexualOrientation, { through: TemaChatOrientacion, foreignKey:'TemaChatId' });
SexualOrientation.belongsToMany(TemaChat, { through: TemaChatOrientacion, foreignKey:'OrientacionId' });


export default TemaChatOrientacion;