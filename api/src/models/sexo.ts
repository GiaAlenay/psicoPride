import { Model,DataTypes } from "sequelize";
import sequelize from "../database";
import { SexoAttributes } from "../data";

class Sexo extends Model <SexoAttributes> implements SexoAttributes{
    public id?:number;
    public name!: string;
    public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};

Sexo.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },{
        sequelize,
        tableName: "sexos",
    }
);

export default Sexo;
