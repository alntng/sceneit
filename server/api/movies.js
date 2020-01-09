const router = require('express').Router()
const {Movie} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const AllList = await Movie.findAll()
    res.send(AllList)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const [movies] = await Movie.findAll({
      where: {id: req.params.id}
    })
    res.send(movies)
  } catch (error) {
    console.log(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // console.log(req.body, '****')
    const existingMovie = await Movie.findOne({
      where: {movieId: req.body.id}
    })

    if (existingMovie) {
      res.send(existingMovie)
    } else {
      const newMovie = await Movie.create({
        movieId: req.body.id,
        title: req.body.original_title,
        releaseDate: req.body.release_date,
        summary: req.body.overview
      })

      res.send(newMovie)
    }
  } catch (error) {
    console.log(error)
  }
})
