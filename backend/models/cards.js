import mongoose from 'mongoose'

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    }
})

export default mongoose.model('Card', CardSchema)

