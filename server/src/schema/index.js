import { GraphQLSchema } from 'graphql'; 

import rootQuery from './rootQuery';
import mutations  from './mutations';

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: mutations
});

export default schema;
