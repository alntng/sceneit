const Sequelize = require('sequelize')
const db = require('../db')

const List = db.define('list', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  }
})

module.exports = List
