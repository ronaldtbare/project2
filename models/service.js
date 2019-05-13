/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Service = sequelize.define(
    "Service",
    {
      title: DataTypes.STRING,
      time_date: DataTypes.STRING,
      service_des: DataTypes.TEXT
    },
    {
      timestamps: false
    }
  );
  return Service;
};
