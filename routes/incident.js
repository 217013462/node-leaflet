const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const model = require('../models/incident')
const {validateIncident} = require('../controllers/validation')
const auth = require('../controllers/auth')
const can = require('../permissions/user')

const router = Router({prefix: '/api/v1/incident'})
// already define in index.js, just need to set prefix

// setup CRUD operation
router.get('/', getAll)
router.get('/:id', getById)
router.get('/type/:type', getByType)
router.post('/add', auth, bodyParser(), validateIncident, addIncident)
router.put('/:id', auth, bodyParser(), validateIncident, updateById)
router.del('/:id', auth, delById)

async function getAll(ctx) {
  let allIncidents = await model.getAll()
  if (allIncidents) {
    ctx.status = 200
    ctx.body = allIncidents
  }
}

async function getById(ctx) {
  let id = ctx.params.id
  let incident = await model.getById(id)
  if (incident) {
    ctx.status = 200
    ctx.body = incident
  }
}

async function getByType(ctx) {
  let type = ctx.params.type
  let incidentType = await model.getByType(location)
  if (incidentType) {
    ctx.status = 200
    ctx.body = incidentType
  }
}

async function addIncident(ctx) {
  const permission = can.addIncident(ctx.state.user)
  if (!permission.granted) {
      ctx.status = 403
    } else {
    const body = ctx.request.body
    let result = await model.addIncident(body)
    if (result) {
      ctx.status = 201
      ctx.body = result
    }
  }
}


async function updateById(ctx) {
  let id = ctx.params.id
  const body = ctx.request.body
  let result = await model.updateById(id, body)
  if (result) {
    ctx.status = 200
    ctx.body = result
  } else {
    ctx.status = 404
    ctx.body = "{}"
  }
}

async function delById(ctx) {
  let id = ctx.params.id
  let result = await model.delById(id)
  if (result) {
    ctx.status = 200
    ctx.body = result
  } else {
    ctx.status = 404
    ctx.body = "{}"
  }
}
module.exports = router;
