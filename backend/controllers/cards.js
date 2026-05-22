import Card from '../models/cards.js'

export const getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}
