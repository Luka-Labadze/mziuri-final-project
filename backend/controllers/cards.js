import Card from "../models/cards.models.js";

export const getCards = async (req, res) => {
  try {
    const cards = await Card.find();

    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || id.length < 5) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const product = await Card.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      error: error 
    });
  }
};