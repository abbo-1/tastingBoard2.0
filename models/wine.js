'use strict';
module.exports = (sequelize, DataTypes) => {
  const wine = sequelize.define('wine', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    vineyard: DataTypes.STRING,
    date: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  wine.associate = function(models) {
    // associations can be defined here
  };
  return wine;
};