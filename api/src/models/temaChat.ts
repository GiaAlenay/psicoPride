import { Model,DataTypes } from "sequelize";
import sequelize from "../database";
import Sexo from "./sexo";
import { TemaChatAttributes } from "../data";
import TemaChatSexo from "./temaChatSexo";
import TemaChatGenero from "./temaChatGenero";
import TemaChatOrientacion from "./temaChatOrientacion";

class TemaChat extends Model <TemaChatAttributes> implements TemaChatAttributes{
    public id?:number;
    public pregunta!: string;
    public respuesta!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly temaChatSexo?: TemaChatSexo[];
    public readonly temaChatGenero?: TemaChatGenero[];
    public readonly temaChatOrientacion?: TemaChatOrientacion[];
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
        },

    },{
        sequelize,
        tableName:'temachat'
    }
)

export default TemaChat;