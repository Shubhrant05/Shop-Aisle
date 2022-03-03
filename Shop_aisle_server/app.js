const express = require('express')
const bodyParser = require('body-parser')
const shopRoute = require('./Routes/Shop-route')
const userRoute = require('./Routes/User-route')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.use('/api/shop', shopRoute)
app.use('/api/user', userRoute)

app.listen(5000);