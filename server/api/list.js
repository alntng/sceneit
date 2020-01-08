const router = require('express').Router()
const {List, User, Movie} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const AllList = await List.findAll()
    res.send(AllList)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const [userList] = await User.findAll({
      where: {id: req.params.id},
      include: [{model: List}]
    })
    res.send(userList.lists)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:userId/:listId', async (req, res, next) => {
  try {
    const [list] = await List.findAll({
      where: {id: req.params.listId},
      include: [{model: Movie}]
    })
    res.send(list.movies)
  } catch (error) {
    console.log(error)
  }
})
