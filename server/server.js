
// Require statements
const express = require("express");
const cors = require("cors");
// Declare and assign values to constants

// Instantiate the app (express server) object
const app = express();

//Configure the app / server object with app.use
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require any configurations / middleware
require("./config/mongoose.config");

// Add all of the routes
require('./routes/recipe.routes')(app);

// Start the server listening on desired port
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})