const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const grocerySchema = new Schema(
    {
        foods: {
            type: String,
            required: true
        },
        brands: {
            type: String,
            required: true,
            enum: ["Kellog's", "Goya", "Quaker", "Dole", "DiGiorno", "Lay's"]
        },
        quantity: {
            type: Number,
            min: 1,
            default: 1
        },
        price: {
            type: String
        }
},
{
    timestamps: true
})

module.exports = mongoose.model("Grocery", grocerySchema)