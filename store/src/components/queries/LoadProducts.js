import gql from 'graphql-tag';

const LoadProducts = gql`
    query { 
      products {
        id
        title
        price
        desc
      }
    }`;


export default LoadProducts;
