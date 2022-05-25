const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const bcrypt = require('bcrypt')
const model = require('../models/user')
const {validateUser} = require('../controllers/validation')
const auth = require('../controllers/auth')
const can = require('../permissions/user')

const router = Router({prefix: '/api/v1/user'})
// already define in index.js, just need to set prefix

// setup CRUD operation
router.get('/', auth, getAllUsers)
router.get('/:username', auth, getByUsername)
router.post('/reg', bodyParser(), validateUser, addUser)
router.put('/:id/:incidentID', updateIncidentById)


async function getAllUsers(ctx) {
  const permission = can.readAll(ctx.state.user)
  if (!permission.granted) {
    ctx.status = 403
  } else {
    let allUsers = await model.getAllUsers()
    if (allUsers.length) {
      ctx.status = 200
      ctx.body = allUsers
    }
  }
}

async function getByUsername(ctx) {    
  let username = ctx.params.username
  const permission = can.read(ctx.state.user, username)
  if (!permission.granted) {
    ctx.status = 403
  } else {
    let user = await model.getByUsername(username)
      ctx.status = 200
    if (user.length) {
      ctx.body = user
    }
  }
}

async function addUser(ctx, next) {
  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(ctx.request.body.password, salt)
    ctx.request.body.password = hashedPassword
    
    const body = ctx.request.body
    let result = await model.addUser(body)
    if (result) {
      ctx.status = 201
      ctx.body = result
    } else {
      ctx.status = 404
      ctx.body = "{}"
    }
    next()
  } catch(error) {
    console.log(error)
    response.status(500).send("Internal Error")
  }
}

async function updateIncidentById(ctx) {
  let id = ctx.params.id
  let incidentID = ctx.params.incidentID
  let result = await model.updateIncidentById(id, incidentID)
  if (result) {
    ctx.status = 200
    ctx.body = result
  } else {
    ctx.status = 404
    ctx.body = "{}"
  }
}

module.exports = router