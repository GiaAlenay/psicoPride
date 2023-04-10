import { Model,DataTypes } from "sequelize";
import sequelize from "../database";
import { TemaBibliotecaAttributes } from "../data";

class TemaBiblioteca extends Model <TemaBibliotecaAttributes> implements TemaBibliotecaAttributes{
    public id?:number;
    public titulo!: string;
    public contenido!: string;
    public mainImagen!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

TemaBiblioteca.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        titulo:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        contenido:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        mainImagen:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    },{
        sequelize,
        tableName:'temaBiblioteca'
    }
)

export default TemaBiblioteca;