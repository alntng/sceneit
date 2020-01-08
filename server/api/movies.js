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
