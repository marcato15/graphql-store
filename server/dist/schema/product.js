'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLFloat = graphql.GraphQLFloat,
    GraphQLString = graphql.GraphQLString,
    GraphQLID = graphql.GraphQLID,
    GraphQLList = graphql.GraphQLList;


var Product = new GraphQLObjectType({
    name: 'Product',
    fields: function fields() {
        return {
            id: {
                type: GraphQLID,
                resolve: function resolve(obj) {
                    console.log("obj", obj);
                    return obj["_id"];
                }
            },
            title: { type: GraphQLString },
            desc: { type: GraphQLString },
            price: { type: GraphQLFloat }
        };
    }
});

exports.default = Product;