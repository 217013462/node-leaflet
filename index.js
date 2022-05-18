const Koa = require('koa')
const app = new Koa()
const cors = require('@koa/cors')

const user = require('./routes/user')
const special = require('./routes/special')
const roadworks = require('./routes/roadworks')
const trafficnews = require('./routes/trafficnews')
const trafficcamera = require('./routes/trafficcamera')

app.use(cors())
app.use(user.routes())
app.use(special.routes())
app.use(roadworks.routes())
app.use(trafficnews.routes())
app.use(trafficcamera.routes())

let port = process.env.PORT || 10888
app.listen(port)

console.log('API is ready')
