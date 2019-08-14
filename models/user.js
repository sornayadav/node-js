'use strict';
const Sequelize = require('sequelize')

module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define("User", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: Sequelize.DATE
    }, {
            freezeTableName: true
        });

    User.associate = function (models) {
        User.hasMany(models.TeamUser, {
            foreignKey: { allowNull: false },
            onDelete: 'CASCADE'
        })
    }

    return Players;
};