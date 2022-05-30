const Router = require('koa-router')
const model = require('../models/clpev')
const router = Router({prefix: '/api/v1/clpev'})

router.get('/', getCLPev)

const url = 'https://opendata.clp.com.hk/GetChargingSectionXML.aspx?lang=EN'

async function getCLPev(ctx){
  ctx.body = await model.getCLPev(url)
  console.log(ctx.body)
}

module.exports = router

// data source
// https://opendata.clp.com.hk/GetChargingSectionXML.aspx?lang=EN
// data dictionary
// https://opendata.clp.com.hk/ev_opendata_spec_tc.pdf

// Remarks:
// HK Electric Company EV station are included in this layer.
// Thus, this data source have already covered all of the EV station in HK