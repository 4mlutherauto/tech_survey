const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pay extends Model {}

Pay.init(
    {    pay_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pay_amount: {
            type: DataTypes.INTEGER,
            required: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Pay'
    }
);

module.exports = Pay;