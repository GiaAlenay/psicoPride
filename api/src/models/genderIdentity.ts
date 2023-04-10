import { DataTypes,Model } from "sequelize";
import sequelize from "../database";
import { GenderIdentityAttributes } from "../data";
import TemaChatGenero from "./temaChatGenero";

class GenderIdentity extends Model <GenderIdentityAttributes> implements GenderIdentityAttributes{
    public id?:number;
    public name!:string;
    public readonly createdAt!: Date;
     public readonly updatedAt!: Date;
     public readonly temaChatGenero?: TemaChatGenero[];
}

GenderIdentity.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        sequelize,
        tableName:'genderidentity'
    }
);

export default GenderIdentity;