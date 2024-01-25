import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";


const Category = sequelize.define('Categories',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{timestamps: false})

export default Category;