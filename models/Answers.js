const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Answers extends Model {}

Answers.init(
    {    answer_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
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
        earn_per_week: {
            type: DataTypes.INTEGER
        },
        ranking: {
            type: DataTypes.INTEGER,
        },
        emplappreciation: {
            type: DataTypes.STRING,
        },
        fairsalary: {
            type: DataTypes.STRING,
        },
        benefitselectionarray: {
            type: DataTypes.JSON,
        },
        addtlworkarray: {
            type: DataTypes.JSON,
        },
        employapp: {
            type: DataTypes.STRING,
        },
        percent: {
            type: DataTypes.DECIMAL(2,2),
        },
        staycurrent: {
            type: DataTypes.STRING,
        },
        contedu: {
            type: DataTypes.JSON,
        },
        adveducation: {
            type: DataTypes.STRING,
        },
        noeduincentive: {
            type: DataTypes.STRING,
        },
        techtoolsarray: {
            type: DataTypes.JSON,
        },
        safetools: {
            type: DataTypes.STRING,
        },
        mechvstechtools: {
            type: DataTypes.STRING,
        },
        schedneed: {
            type: DataTypes.STRING,
        },
        advopp: {
            type: DataTypes.STRING,
        },
        equalprod: {
            type: DataTypes.STRING,
        },
        respect: {
            type: DataTypes.STRING,
        },
        undervalue: {
            type: DataTypes.STRING,
        },
        mechvstech: {
            type: DataTypes.STRING,
        },
        balance: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "user",
              key: "id",
            },
        },
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