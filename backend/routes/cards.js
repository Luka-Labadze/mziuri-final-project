import express from 'express'
import { getCards, getProduct } from '../controllers/cards.js'

const CardsRouter = express.Router()

CardsRouter.get('/products', getCards)
CardsRouter.get('/', getCards)
CardsRouter.get('/single-product/:id', getProduct);

export default CardsRouter