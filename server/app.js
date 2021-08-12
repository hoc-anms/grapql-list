const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const mongoose = require('mongoose');
const schema = require("./schemas/schema");

const app = express();

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/graphql-demo', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
   console.log("MongoDB Connected!")
})

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true,
}))

app.listen(4000, () => {
   console.log("Server is running on port 4000")
});
