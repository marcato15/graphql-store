import { GraphQLFloat, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull } from "graphql";

import { ObjectID } from 'mongodb';
import Product from "./product";

const Mutations = new GraphQLObjectType({
    name: 'Mutations',
    fields: () => ({
        addProduct: {
            type: Product,
            args: { 
                title: { type: new GraphQLNonNull(GraphQLString) },
                desc: { type: GraphQLString },
                price: { type: new GraphQLNonNull(GraphQLFloat) },
            },
            async resolve(obj, product, { db }) {
                const products = db.collection("documents"); 
                const newProduct = await products.insertOne(product);
                const doc = await products.findOne({ "_id": new ObjectID(newProduct.insertedId) });
                return doc; 
            }
        },
        updateProduct: {
            type: Product,
            args: { 
                id: { type: new GraphQLNonNull(GraphQLID) },
                title: { type: GraphQLString },
                desc: { type: GraphQLString },
                price: { type: GraphQLFloat},
            },
            async resolve(obj, product, { db }) {
                const products = db.collection("documents"); 
                console.log("product",product);
                const updateResult = await products.updateOne(
                    { "_id": new ObjectID(product.id) },
                    {$set: product},
                );
                const doc = await products.findOne({ "_id": new ObjectID(product.id) });
                return doc; 
            }
        },
        deleteProduct: {
            type: GraphQLString,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            async resolve(obj, { id }, { db }) {
                const products = db.collection("documents"); 
                const deleteResult = await products.deleteOne({ "_id": new ObjectID(id) });
                return deleteResult.result.ok; 
            }
        },
    })
});

export default Mutations;
