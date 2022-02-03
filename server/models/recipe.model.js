const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    recipeTitle: {
        type: String,
        required: [true, "A title is required"],
        minLength: [3, "The title must be 3 characters or more!"]
    },
    recipeBriefDescrip: {
        type: String,
        required: [true, "A description is required"],
    },
    recipeIngredients: {
        type: String,
        required: [true, "Ingredients are required"],
    },
    recipeInstructions: {
        type: String,
        required: [true, "Intructions are required"],
    },
    recipeImg: {
        type: String,
    },


}, { timestamps: true });
module.exports = mongoose.model('Recipe', RecipeSchema);
