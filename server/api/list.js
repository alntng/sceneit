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
    res.send(list)
  } catch (error) {
    console.log(error)
  }
})

router.put('/:userId', async (req, res, next) => {
  try {
    await List.update(
      {title: req.body.title, description: req.body.description},
      {where: {id: req.body.listId}}
    )
    res.send('updated')
  } catch (error) {
    console.log(error)
  }
})

router.put('/', async (req, res, next) => {
  try {
    const list = await List.findByPk(req.body.listId)
    const newMovie = await Movie.findOne({
      where: {movieId: req.body.movieId}
    })

    list.addMovie(newMovie)
    res.send(list)
  } catch (error) {
    console.log(error)
  }
})

router.post('/:userID', async (req, res, next) => {
  try {
    const {title, description} = req.body

    const newList = await List.create({
      title: title,
      description: description
    })

    const currentUser = await User.findByPk(req.params.userID)

    await currentUser.addList(newList)
    res.send(currentUser)
  } catch (error) {
    console.log(error)
  }
})

router.put('/:userId/:listId', async (req, res, next) => {
  try {
    const workingList = await List.findByPk(req.params.listId)
    const workingMovie = await Movie.findByPk(req.body.id)

    workingList.removeMovie(workingMovie)
    res.send('removed')
  } catch (error) {
    console.log('Trouble Deleting', error)
  }
})

router.delete('/:userId/:listId', async (req, res, next) => {
  try {
    await List.destroy({where: {id: req.params.listId}})
    res.send('Deleted')
  } catch (error) {
    console.log('Trouble Deleting', error)
  }
})
