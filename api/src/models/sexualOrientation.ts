import { DataTypes ,Model } from "sequelize";
import sequelize from "../database";

interface SexualOrientationAttributes{
    id?:number;
    name:string;
    flag:string;
}

class SexualOrientation extends Model <SexualOrientationAttributes> implements SexualOrientationAttributes{
    public id?:number;
    public name!:string;
    public flag!:string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

SexualOrientation.init(
    {
        id:{
            type:DataTypes.NUMBER,
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