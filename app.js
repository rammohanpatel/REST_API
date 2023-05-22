const express = require("express");
const app = express() ;
const Race = require('./models/Race_Schema')
const port = process.env.port || 8000
require('./db/connection')

app.use(express.json());

const router = require("./routes/men");
app.use(router);


app.listen(8000,()=>console.log(`listening on ${port}`))