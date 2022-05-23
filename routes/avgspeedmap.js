const Router = require('koa-router')
const model = require('../models/avgspeedmap')
const router = Router({prefix: '/api/v1/avgspeedmap'})

router.get('/', getAvgSpeedMap)

const url = 'https://resource.data.one.gov.hk/td/traffic-detectors/irnAvgSpeed-all.xml'

async function getAvgSpeedMap(ctx){
  ctx.body = await model.getAvgSpeedMap(url)
  console.log(ctx.body)
}

module.exports = router

// data source
// average speed data
  // https://data.gov.hk/tc-data/dataset/hk-td-sm_4-traffic-data-strategic-major-roads
  // https://data.gov.hk/tc-data/dataset/hk-td-sm_4-traffic-data-strategic-major-roads/resource/01a57616-e239-4a9e-9e92-cfa16d4ae5c4
  // https://resource.data.one.gov.hk/td/traffic-detectors/irnAvgSpeed-all.xml

// vector file for road
  // GDB for Road Network (2nd Generation)
  // https://data.gov.hk/tc-data/dataset/hk-td-tis_15-road-network-v2
  // KML
  // https://data.gov.hk/tc-data/dataset/hk-td-tis_15-road-network-v2/resource/af8c8f2d-53eb-48b6-af7a-1547bff27cce
  // GML & GFS
  // https://data.gov.hk/tc-data/dataset/hk-td-tis_15-road-network-v2/resource/13ae5ff0-884d-40c2-abe8-5883a0b2f0b5
  // https://data.gov.hk/tc-data/dataset/hk-td-tis_15-road-network-v2/resource/3ad8d773-bfcb-4c34-9ef1-4ef2fd0b7d19


// data dictionary
// https://static.data.gov.hk/td/traffic-data-strategic-major-roads/dataspec/dataspec-traffic-data-strategic-major-roads.pdf


