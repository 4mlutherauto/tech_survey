const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hours extends Model {}

Hours.init(
    {    hours_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        hours_per_week: {
            type: DataTypes.INTEGER,
            defaultValue: 44
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Hours'
    }
);

module.exports = Hours;