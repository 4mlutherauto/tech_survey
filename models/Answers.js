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
        },
        fairsalary: {
            type: DataTypes.STRING,
        },
        benefitselectionarray: {
            type: DataTypes.STRING,
        },
        addtlworkarray: {
            type: DataTypes.STRING,
        },
        employapp: {
            type: DataTypes.STRING,
        },
        percent: {
            type: DataTypes.INTEGER,
        },
        staycurrent: {
            type: DataTypes.STRING,
        },
        contedu: {
            type: DataTypes.STRING,
        },
        adveducation: {
            type: DataTypes.STRING,
        },
        noeduincentive: {
            type: DataTypes.STRING,
        },
        techtoolsarray: {
            type: DataTypes.STRING,
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