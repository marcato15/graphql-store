import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import graphqlHTTP from 'express-graphql';

import { MongoClient } from 'mongodb';

import schema from "./schema";

const MONGO_URL = 'mongodb://store:store@ds163796.mlab.com:63796/products';

const start = async () => {
    try {
        const db = await MongoClient.connect(MONGO_URL)

        const app = express()

        app.use(cors())
        app.use(bodyParser.json());

        app.use('/graphql', graphqlHTTP({
            schema: schema,
            graphiql: true,
            context: {
                db
            },
        }));

        app.listen(4000, () => {
            console.log(`Server listening on port 4000`)
        })

    } catch (e) {
        console.log(e)
    }

}

export default start;
