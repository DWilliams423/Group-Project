const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost/groupProject02", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Established a connection to the database groupProject02"))
    .catch((err) =>
        console.log("Something went wrong when connecting to the database groupProject02", err)
    );
