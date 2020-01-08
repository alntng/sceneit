const User = require('./user')
const Movie = require('./movie')
const List = require('./list')

List.belongsTo(User)
User.hasMany(List)

Movie.belongsToMany(List, {through: 'movie_list'})
List.belongsToMany(Movie, {through: 'movie_list'})

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Movie,
  List
}
