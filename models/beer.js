'use strict';
module.exports = (sequelize, DataTypes) => {
  const beer = sequelize.define('beer', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    date: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  beer.associate = function(models) {
    // associations can be defined here
  };
  return beer;
};