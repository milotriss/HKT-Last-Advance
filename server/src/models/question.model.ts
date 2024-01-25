import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import Category from "./category.model";


const Question = sequelize.define('Questions',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    level: {
        type: DataTypes.TINYINT,
        allowNull: false,
    }
})

Question.belongsTo(Category,{foreignKey:'categoryId',onDelete:"CASCADE",onUpdate:"CASCADE"})
Category.hasMany(Question,{foreignKey:'categoryId'})

export default Question;