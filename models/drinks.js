'use strict';
module.exports = (sequelize, DataTypes) => {
  const drinks = sequelize.define('drinks', {
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    date: DataTypes.STRING,
    description: DataTypes.STRING,
    favorite: DataTypes.BOOLEAN
  }, {});
  drinks.associate = function(models) {
    // associations can be defined here
  };
  return drinks;
};