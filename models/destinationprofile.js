'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DestinationProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static date(time){
      let day = time.toLocaleString()
      console.log(day.slice(0,10));
      return day.slice(0,10)
    }
  };
  DestinationProfile.init({
    ProfileId: DataTypes.INTEGER,
    DestinationId: DataTypes.INTEGER,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DestinationProfile',
  });
  return DestinationProfile;
};