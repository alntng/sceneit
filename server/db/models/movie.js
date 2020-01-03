const Sequelize = require('sequelize')
const db = require('../db')

const Movie = db.define('movie', {
  movieId: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  releaseDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  summary: {
    type: Sequelize.STRING
  }
})

module.exports = Movie
