import { Model,DataTypes } from "sequelize";
import sequelize from "../database";
import { TemaChatAttributes } from "../data";

class TemaChat extends Model <TemaChatAttributes> implements TemaChatAttributes{
    public id?:number;
    public pregunta!: string;
    public respuesta!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

TemaChat.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        pregunta:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        respuesta:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    },{
        sequelize,
        tableName:'temachat'
    }
)

export default TemaChat;