const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const server = express();
const port = process.env.PORT || 5000;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected to Mongo`))
    .catch(err => console.log(err))

server.use(bodyParser.json())

server.use('/graphql', expressGraphQL({
    graphiql: true,
    schema,
}));

server.get('/', (req, res) => {
    res.send('Yes, this is server')
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// const makeAllAccents = require('./config/colorPalatte')
// console.log(
//     makeAllAccents()
// );

