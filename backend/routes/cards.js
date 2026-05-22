import express from 'express'
import {getCards} from '../controllers/cards.js'

const CardsRouter = express.Router()

CardsRouter.get('/products', getCards)
CardsRouter.get('/', getCards)
CardsRouter.get('/single-product', getCards)


export default CardsRouter