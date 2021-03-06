/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie_Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie_Character.init({
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Movies',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Characters',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Movie_Character',
  });
  return Movie_Character;
};
