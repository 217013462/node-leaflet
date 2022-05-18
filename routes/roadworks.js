const Router = require('koa-router')
const model = require('../models/roadworks')
const router = Router({prefix: '/api/v1/roadworks'})

router.get('/', getAllRoadworks)

const url = 'https://resource.data.one.gov.hk/td/roadworks-location/get_all_the_roadworks.json'

async function getAllRoadworks(ctx){
  ctx.body = await model.getAllRoadworks(url)
  console.log(ctx.body)
}

module.exports = router