'use strict';
module.exports = (sequelize, DataTypes) => {
  const liquor = sequelize.define('liquor', {
    name: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    type: DataTypes.STRING,
    date: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  liquor.associate = function(models) {
    // associations can be defined here
  };
  return liquor;
};