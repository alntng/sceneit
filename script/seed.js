'use strict'

const db = require('../server/db')
const {User, List, Movie} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const favList = await List.create({
    title: 'Favorites',
    description: 'current faves'
  })
  const upNext = await List.create({
    title: 'Watch Next',
    description: 'On my watchlist'
  })

  const action = await List.create({
    title: 'Action Movies',
    description: 'fights'
  })

  const cody = await User.create({email: 'cody@email.com', password: '123'})
  const murphy = await User.create({email: 'murphy@email.com', password: '123'})

  const marriageStory = await Movie.create({
    movieId: '492188',
    title: 'Marriage Story',
    releaseDate: '2019',
    summary: 'Adam Driver and Scarlet Johansen'
  })

  await favList.setUser(cody)
  await murphy.addList(upNext)
  await action.setUser(cody)

  await upNext.addMovie(marriageStory)
  await favList.addMovie(marriageStory)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
