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