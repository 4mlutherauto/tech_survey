const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answers extends Model {}

Answers.init(
    {    a_user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        salary: {
            type: DataTypes.INTEGER,
        },
        skill: {
            type: DataTypes.STRING,
        },
        hours_per_week: {
            type: DataTypes.INTEGER,
            default: 30
        },
        ranking: {
            type: DataTypes.INTEGER,
        },
        emplappreciation: {
            type: DataTypes.STRING,
        }
    },
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'answers_a'
}
);

module.exports = Answers;