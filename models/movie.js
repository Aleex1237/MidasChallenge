const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsToMany(models.Character, {
        as: 'characters',
        through: 'Movie_Characters',
        foreignKey: 'movie_id',
        otherKey: 'character_id',
        timestamps: false,
      });
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    director: DataTypes.STRING,
    producer: DataTypes.STRING,
    release_date: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
