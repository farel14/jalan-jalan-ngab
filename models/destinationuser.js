'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DestinationUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static date(time){
      return time.toDateString()
    }
  };
  DestinationUser.init({
    ProfileId: DataTypes.INTEGER,
    DestinationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DestinationUser',
  });
  return DestinationUser;
};