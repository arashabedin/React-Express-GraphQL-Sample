const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
require('./models').connect("mongodb://localhost/graphql_test_db", { useNewUrlParser: true });
require('./instantiation');
const schema = require('./schema/schema.js')


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000,()=>{ 
    console.log("Now listening for requests on port 4000");
})