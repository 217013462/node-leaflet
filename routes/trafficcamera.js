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

// data source
// https://data.gov.hk/en-data/dataset/hk-td-tis_2-traffic-snapshot-images
// data dictionary
// https://static.data.gov.hk/td/traffic-snapshot-images/en/Summary_of_traffic_snapshot_images.pdf