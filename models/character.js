const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.belongsToMany(models.Movie, {
        as: 'movies',
        through: 'Movie_Characters',
        foreignKey: 'character_id',
        otherKey: 'movie_id',
        timestamps: false,
      });
    }
  }
  Character.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    specie: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Character',
    timestamps: true,
  });
  return Character;
};
