const LoadProducts = gql`
    query { 
      products {
        id
        title
        price
        desc
      }
    }`;


