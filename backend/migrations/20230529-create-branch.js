'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Branches', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            latitude: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            longitude: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            full_address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            branch_id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                unique: true
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Branches');
    }
};
