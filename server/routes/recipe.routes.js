const RecipeController = require("../controllers/recipe.controller");

module.exports = function (app) {
    app.get("/api/recipes", RecipeController.getAllRecipes);
    app.post("/api/recipe", RecipeController.createRecipe);
    app.get("/api/recipe/:id", RecipeController.getOneRecipe);
    app.put("/api/recipe/:id", RecipeController.updateRecipe);
    app.delete("/api/recipe/:id", RecipeController.deleteRecipe);
};