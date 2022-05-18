const Router = require('koa-router')
const model = require('../models/trafficcamera')
const router = Router({prefix: '/api/v1/trafficcamera'})

router.get('/', getAllCams)

const url = 'https://static.data.gov.hk/td/traffic-snapshot-images/code/Traffic_Camera_Locations_En.xml'

async function getAllCams(ctx){
  ctx.body = await model.getAllCams(url)
  console.log(ctx.body)
}

module.exports = router