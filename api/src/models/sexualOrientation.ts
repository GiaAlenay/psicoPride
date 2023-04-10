import { DataTypes ,Model } from "sequelize";
import sequelize from "../database";
import { SexualOrientationAttributes } from "../data";
import TemaChatOrientacion from "./temaChatOrientacion";

class SexualOrientation extends Model <SexualOrientationAttributes> implements SexualOrientationAttributes{
    public id?:number;
    public name!:string;
     public flag!:string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly temaChatOrientacion?: TemaChatOrientacion[];
}

SexualOrientation.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        flag:{
            type:DataTypes.TEXT,
            allowNull:false
        }

    },{
        sequelize,
        tableName:'sexualorientation'
    }
)

export default SexualOrientation;