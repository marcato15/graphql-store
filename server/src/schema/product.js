const graphql = require('graphql');
const { GraphQLObjectType, GraphQLFloat, GraphQLString, GraphQLID, GraphQLList } = graphql;

const Product = new GraphQLObjectType({
    name:  'Product',
    fields: () => ({
        id: { 
            type: GraphQLID,  
            resolve(obj) {
                console.log("obj",obj);
                return  obj["_id"];
            } 
        },
        title: { type: GraphQLString },
        desc: { type: GraphQLString },
        price: { type: GraphQLFloat },
    })
});

export default Product;
