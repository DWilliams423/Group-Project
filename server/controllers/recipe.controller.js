const Recipe = require("../models/recipe.model");

const createRecipe = (req, res) => {
    // Create a new Recipe
    console.log(req.body);
    Recipe.create(req.body)
        .then((newRecipe) => {
            console.log(newRecipe);
            res.json(newRecipe);
        })
        .catch((err) => {
            console.log(`Error with createRecipe function: ${err}`);
            res.status(400).json(err);
        });
};

const getAllRecipes = (req, res) => {
    // Get all recipes
    Recipe.find()
        .then((allRecipes) => {
            console.log(allRecipes);
            res.json(allRecipes);
        })
        .catch((err) => {
            console.log(`Error with getAllRecipes function: ${err}`);
            res.status(400).json(err);
        });
};

const getOneRecipe = (req, res) => {
    // Get a recipe
    console.log(req.params.id);
    Recipe.findById(req.params.id)
        .then((singleRecipe) => {
            console.log(singleRecipe);
            res.json(singleRecipe);
        })
        .catch((err) => {
            console.log(`Error with getOneRecipe function: ${err}`);
            res.status(400).json(err);
        });
};

const updateRecipe = (req, res) => {
    // Update a recipe
    // use id in url to query document want to update
    // second arg is the info from that queried doc to change
    console.log(req.params.id);
    console.log(req.body);
    Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedRecipe) => {
            console.log(updatedRecipe);
            res.json(updatedRecipe);
        })
        .catch((err) => {
            console.log(`Error with updateRecipe function: ${err}`);
            res.status(400).json(err);
        });
};

const deleteRecipe = (req, res) => {
    // Delete a recipe
    console.log(req.params.id);
    Recipe.findByIdAndDelete(req.params.id)
        .then((deletedRecipe) => {
            console.log(deletedRecipe);
            res.json(deletedRecipe);
        })
        .catch((err) => {
            console.log(`Error with deleteRecipe function: ${err}`);
            res.status(400).json(err);
        });
};

module.exports = {
    createRecipe,
    getAllRecipes,
    getOneRecipe,
    updateRecipe,
    deleteRecipe,
};