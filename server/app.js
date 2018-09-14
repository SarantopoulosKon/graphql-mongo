const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
});
mongoose.connection.once('open', () => {
    console.log('Connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
