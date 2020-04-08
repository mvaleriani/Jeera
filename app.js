const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const port = process.env.PORT || 5000;
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log(`Connected to Mongo`))
    .catch(err => console.log(err))

app.use('/graphql', expressGraphQL({
    graphiql: true,
    schema,
}))

app.get('/', (req, res) => {
    res.send("Hello Client")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

