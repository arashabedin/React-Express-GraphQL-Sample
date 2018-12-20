const graphql = require('graphql');
const _ = require('lodash');
const {
     GraphQLObjectType,
     GraphQLString, 
     GraphQLSchema,
     GraphQLID,
     GraphQLInt,
     GraphQLList
    } = graphql; 

//dummy data
var books = [
    {name:'Boofe Koor', genre:'Surealistic', id:'1',authorId:'1'},
    {name:'A Clockwork Orange', genre:'Crime', id:'2',authorId:'2'},
    {name:'Harry Potter and the Chamber of Secrets', genre:'Adventure', id:'3',authorId:'3'},
    {name:'Harry Potter and the Prisoner of Azkaban', genre:'Adventure', id:'3',authorId:'3'},
    {name:'Sage velgard', genre:'drama', id:'3',authorId:'1'},
]
var authors = [
    {name:'Sadegh Hedayat', age:50, id:'1'},
    {name:'Anthony Burgess ', age:80, id:'2'},
    {name:'J.K Rowling', age:53, id:'3'},
]


const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
              return _.find(authors,{id:parent.authorId})
            }
        }
    })
});
const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        book:{
            type: new GraphQLList(BookType),
            resolve(parent,args){
              return _.filter(books,{authorId:parent.id})
            }
        }
    })
});
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:()=>({
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                //Code to get data from db / other sources
                return books;
            }
        },
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //Code to get data from db / other sources
                return _.find(books, {id:args.id});
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id});
            }
        },
        authors:{
            type:new GraphQLList(AuthorType),
            resolve(parent,args){
                return authors;
            }
        }
    })
});

module.exports = new GraphQLSchema({
    query:RootQuery
})