import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";
import Question from "./question.model";


const Answer = sequelize.define('Answers',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    isAnswer: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
})
Answer.belongsTo(Question,{foreignKey:'questionId',onDelete:"CASCADE",onUpdate:"CASCADE"})
Question.hasMany(Answer,{foreignKey:'questionId'})

export default Answer;