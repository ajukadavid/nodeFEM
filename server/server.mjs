import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const app = express()

app.use(bp.urlencoded({extended: true }))
app.use(bp.json())
app.use(morgan())