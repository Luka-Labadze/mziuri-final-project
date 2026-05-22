import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'
import connectDB from './db/connection.js'
import { rateLimit } from 'express-rate-limit'
import helmet from "helmet"
import compression from 'compression'
import cookieParser from 'cookie-parser'
import CardsRouter from './routes/cards.js'

const app = express()
const PORT = process.env.PORT || 3000

// 1. GLOBAL SECURITY & OPTIMIZATION MIDDLEWARE FIRST
app.use(helmet())
app.use(cors())
app.use(cookieParser())
app.use(compression())

// 2. PARSE JSON INCOMING BODIES (MUST be before your routers!)
app.use(express.json())

// 3. RATE LIMITER
const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100, 
    message: "Too many requests from this IP, please try again later"
})
// app.use(limiter)

// 4. API ROUTES (Now safe to read incoming request JSON data)
app.use('/api', CardsRouter)

// 5. START SERVER
app.listen(PORT, () => {
    console.log("Server is running on PORT :", PORT);
    connectDB(process.env.CONNECTION_STRING)
})