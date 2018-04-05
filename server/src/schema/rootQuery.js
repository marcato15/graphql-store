import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID, GraphQLNonNull } from "graphql";

import { ObjectID } from 'mongodb';
import Product from "./product";

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        products: {
            type: new GraphQLList(Product),
            async resolve(obj, args, { db }) {
                const cursor = await db.collection("documents").find();
                const docs = await cursor.toArray();
                return docs; 
            }
        },
        product: {
            type: Product,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            async resolve(obj, { id }, { db }) {
                const doc = await db.collection("documents").findOne({ "_id": new ObjectID(id) });
                return doc; 
            }
        },
    })
});

export default RootQuery;
