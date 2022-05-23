const Router = require('koa-router')
const model = require('../models/trafficnews')
const router = Router({prefix: '/api/v1/trafficnews'})

router.get('/', getAllNews)

const url = 'https://www.td.gov.hk/en/special_news/trafficnews.xml'

async function getAllNews(ctx){
  ctx.body = await model.getAllNews(url)
  console.log(ctx.body)
}

module.exports = router

// data source
// https://data.gov.hk/en-data/dataset/hk-td-tis_19-special-traffic-news-v2/resource/bcf73001-b557-48ab-b10c-28d88db0d684
// schema
// https://www.td.gov.hk/en/special_news/trafficnews.xsd