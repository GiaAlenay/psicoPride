import { DataTypes,Model } from "sequelize";
import sequelize from "../database";

interface genderIdentityAttributes{
    id?:number;
    name:string;
}

class GenderIdentity extends Model <genderIdentityAttributes> implements genderIdentityAttributes{
    public id?:number;
    public name!:string;
    public readonly createdAt!: Date;
     public readonly updatedAt!: Date;
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