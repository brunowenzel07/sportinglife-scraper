'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('CorridaCavalos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idSportinglife: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      data: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      hora: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      local: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pista: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      idade: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      qtdCorredores: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      precisao: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      oddP1: {
        type: DataTypes.FLOAT,
      },
      oddP2: {
        type: DataTypes.FLOAT,
      },
      oddP3: {
        type: DataTypes.FLOAT,
      },
      oddP4: {
        type: DataTypes.FLOAT,
      },
      oddP5: {
        type: DataTypes.FLOAT,
      },
      oddP6: {
        type: DataTypes.FLOAT,
      },
      oddP7: {
        type: DataTypes.FLOAT,
      },
      oddP8: {
        type: DataTypes.FLOAT,
      },
      oddP9: {
        type: DataTypes.FLOAT,
      },
      oddP10: {
        type: DataTypes.FLOAT,
      },
      oddP11: {
        type: DataTypes.FLOAT,
      },
      oddP12: {
        type: DataTypes.FLOAT,
      },
      oddP1Dec: {
        type: DataTypes.STRING,
      },
      oddP2Dec: {
        type: DataTypes.STRING,
      },
      oddP3Dec: {
        type: DataTypes.STRING,
      },
      oddP4Dec: {
        type: DataTypes.STRING,
      },
      oddP5Dec: {
        type: DataTypes.STRING,
      },
      oddP6Dec: {
        type: DataTypes.STRING,
      },
      oddP7Dec: {
        type: DataTypes.STRING,
      },
      oddP8Dec: {
        type: DataTypes.STRING,
      },
      oddP9Dec: {
        type: DataTypes.STRING,
      },
      oddP10Dec: {
        type: DataTypes.STRING,
      },
      oddP11Dec: {
        type: DataTypes.STRING,
      },
      oddP12Dec: {
        type: DataTypes.STRING,
      },
      premioP1: {
        type: DataTypes.STRING,
      },
      premioP2: {
        type: DataTypes.STRING,
      },
      premioP3: {
        type: DataTypes.STRING,
      },
      premioP4: {
        type: DataTypes.STRING,
      },
      premioP5: {
        type: DataTypes.STRING,
      },
      premioP6: {
        type: DataTypes.STRING,
      },
      premioP7: {
        type: DataTypes.STRING,
      },
      premioP8: {
        type: DataTypes.STRING,
      },
      premioP9: {
        type: DataTypes.STRING,
      },
      premioP10: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('CorridaCavalos');
  }
};