const Koa = require('koa')
const app = new Koa()
const cors = require('@koa/cors')

const special = require('./routes/special')
const user = require('./routes/user')
const incident = require('./routes/incident')
const roadworks = require('./routes/roadworks')
const trafficnews = require('./routes/trafficnews')
const trafficcamera = require('./routes/trafficcamera')

app.use(cors())
app.use(special.routes())
app.use(user.routes())
app.use(incident.routes())
app.use(roadworks.routes())
app.use(trafficnews.routes())
app.use(trafficcamera.routes())

let port = process.env.PORT || 10888
app.listen(port)

console.log('API is ready')



// https://tdas-api.hkemobility.gov.hk/tdas/specification/TD_TDAS_API_Specifications.pdf
// API for provide the average traffic speed and the total journey time of the driving route from origin to destination