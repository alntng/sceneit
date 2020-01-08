const Sequelize = require('sequelize')
const db = require('../db')

const Movie = db.define('movie', {
  movieId: {
    type: Sequelize.INTEGER
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
    type: Sequelize.TEXT
  }
})

module.exports = Movie
