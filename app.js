const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const app = express();
const port = process.env.PORT || 5000;
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log(`Connected to Mongo`))
    .catch(err => console.log(err))


app.get("/", (req, res) => {
    res.send("Hello Client")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

