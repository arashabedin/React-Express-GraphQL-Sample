const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql; 

//dummy data
var books = [
    {name:'Boofe Koor', genre:'Surealistic', id:'1'},
    {name:'A Clockwork Orange', genre:'Crime', id:'2'},
    {name:'Harry Potter', genre:'Adventure', id:'3'},
]


const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:()=>({
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                //Code to get data from db / other sources
                return _.find(books, {id:args.id});
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query:RootQuery
})